#!/usr/bin/env node
/* Builds assets/Dongsu_Park_Portfolio.pptx from assets/js/data.js with pptxgenjs.
 *   npm install pptxgenjs   (once)
 *   node scripts/build-pptx.js
 * Slides: cover · About · Skills · Career(기관별) · 프로젝트 그룹 표지(과업 2개 이상) · 과업당 1장
 */
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
global.window = {};
require(path.join(root, "assets/js/data.js"));
const D = window.PORTFOLIO;

/* image dimensions (PNG / JPEG) without extra deps */
function imageSize(file) {
  const b = fs.readFileSync(file);
  if (b[0] === 0x89 && b[1] === 0x50) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const m = b[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  return { w: 16, h: 9 };
}
D.projects.forEach((p) => (p.images || []).forEach((im) => { im.abs = path.join(root, im.src); Object.assign(im, imageSize(im.abs)); }));


/* ---------- palette / fonts ---------- */
const C = { navy: "14213D", ink: "1A1D24", ink2: "444B57", muted: "6B7280", line: "E3E6EB", accent: "1F6FE0", accentSoft: "E8F0FD", soft: "F4F6F9", white: "FFFFFF", iceOnDark: "C9D8F5", mutedOnDark: "93A3C7" };
const F = "Malgun Gothic";
const W = 13.333, H = 7.5, M = 0.6;

/* ---------- text measurement (rough, for choosing font sizes) ---------- */
function lines(text, pt, widthIn) {
  const emIn = pt / 72;
  let w = 0;
  for (const ch of String(text)) w += /[ᄀ-ᇿ㄰-㆏가-힯　-〿＀-￯·]/.test(ch) ? 1.0 * emIn : 0.58 * emIn;
  return Math.max(1, Math.ceil((w * 1.08) / Math.max(0.5, widthIn)));
}
const lineH = (pt, spacing = 1.45) => (pt * spacing) / 72;
function blockH(texts, pt, widthIn, para = 0.08) {
  return texts.reduce((h, t) => h + lines(t, pt, widthIn) * lineH(pt), 0) + para * Math.max(0, texts.length - 1);
}

/* ---------- helpers ---------- */
function ym(s) { const m = /(\d{4})\.(\d{1,2})/.exec(s || ""); return m ? { y: +m[1], m: +m[2] } : null; }
function monthsBetween(period) {
  const [a, b] = String(period).split("~").map((t) => t.trim());
  const s = ym(a); if (!s) return 0;
  const now = new Date(); const e = ym(b) || { y: now.getFullYear(), m: now.getMonth() + 1 };
  return Math.max(0, (e.y - s.y) * 12 + (e.m - s.m) + 1);
}
const fmtMonths = (n) => { const y = Math.floor(n / 12), m = n % 12; return [y ? `${y}년` : "", m ? `${m}개월` : ""].filter(Boolean).join(" "); };
function periodRange(ps) {
  const toks = []; let ongoing = false;
  ps.forEach((p) => { (String(p.period).match(/\b(19|20)\d{2}(\.\d{2})?/g) || []).forEach((t) => toks.push(t)); if (/현재/.test(p.period)) ongoing = true; });
  const key = (t) => (t.length === 4 ? t + ".00" : t);
  toks.sort((a, b) => key(a).localeCompare(key(b)));
  return `${toks[0]} ~ ${ongoing ? "현재" : toks[toks.length - 1]}`;
}
const byId = new Map(D.projects.map((p) => [p.id, p]));
const totalMonths = D.careers.reduce((n, c) => n + monthsBetween(c.period), 0);

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = D.profile.name; pres.title = `${D.profile.name} · Portfolio`;

const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, isTextBox: true, margin: 0, valign: "top" }, o));
function circleNo(slide, n, x, y, d = 0.42, opts = {}) {
  slide.addShape(pres.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: opts.fill || C.accent }, line: { color: opts.fill || C.accent } });
  T(slide, String(n), { x, y, w: d, h: d, fontSize: opts.pt || 12, bold: true, color: opts.color || C.white, align: "center", valign: "middle" });
}
function footer(slide, dark = false) {
  T(slide, `${D.profile.name} · Portfolio`, { x: M, y: H - 0.42, w: 4, h: 0.25, fontSize: 9, color: dark ? C.mutedOnDark : C.muted });
}
let pageNo = 0;
function pageNum(slide, dark = false) {
  pageNo += 1;
  T(slide, String(pageNo), { x: W - M - 1, y: H - 0.42, w: 1, h: 0.25, fontSize: 9, color: dark ? C.mutedOnDark : C.muted, align: "right" });
}

/* ================= 1. Cover ================= */
{
  const s = pres.addSlide(); s.background = { color: C.navy };
  T(s, "HEALTHCARE IT · INFRA · FULL-STACK", { x: M, y: 1.55, w: 9, h: 0.35, fontSize: 12, color: C.accent, bold: true, charSpacing: 4 });
  T(s, [{ text: D.profile.name, options: { fontSize: 54, bold: true, color: C.white } }, { text: `   ${D.profile.nameEn}`, options: { fontSize: 24, color: C.iceOnDark } }],
    { x: M, y: 2.0, w: 11, h: 1.1, valign: "middle" });
  T(s, D.profile.roles.join("  ·  "), { x: M, y: 3.15, w: 11, h: 0.45, fontSize: 18, bold: true, color: C.iceOnDark });
  T(s, D.profile.tagline, { x: M, y: 3.85, w: 9.5, h: 0.9, fontSize: 16, color: C.white });
  // stat tiles
  const stats = [[fmtMonths(totalMonths), "총 경력"], [`${D.groups.length}`, "프로젝트 그룹"], [`${D.projects.length}`, "수행 과업"], ["1", "특허 등록"]];
  stats.forEach(([v, l], i) => {
    const x = M + i * 2.75;
    s.addShape(pres.ShapeType.roundRect, { x, y: 5.15, w: 2.5, h: 1.15, rectRadius: 0.1, fill: { color: "1C2B52" }, line: { color: "2A3C68" } });
    T(s, v, { x: x + 0.22, y: 5.25, w: 2.1, h: 0.55, fontSize: 24, bold: true, color: C.white });
    T(s, l, { x: x + 0.22, y: 5.82, w: 2.1, h: 0.3, fontSize: 11, color: C.mutedOnDark });
  });
  footer(s, true); pageNum(s, true);
}

/* ================= 2. About me ================= */
{
  const s = pres.addSlide(); s.background = { color: C.white };
  T(s, "About me", { x: M, y: 0.5, w: 8, h: 0.7, fontSize: 36, bold: true, color: C.ink });
  const paras = D.profile.intro;
  const colW = 7.6;
  let pt = 14; while (blockH(paras, pt, colW, 0.18) > 5.2 && pt > 11) pt -= 0.5;
  T(s, paras.map((t, i) => ({ text: t, options: { breakLine: i < paras.length - 1, paraSpaceAfter: 10 } })), { x: M, y: 1.45, w: colW, h: 5.3, fontSize: pt, color: C.ink2, lineSpacingMultiple: 1.35 });
  // right: career cards
  const rx = M + colW + 0.6, rw = W - M - rx;
  T(s, "CAREER", { x: rx, y: 1.5, w: rw, h: 0.3, fontSize: 11, bold: true, color: C.accent, charSpacing: 3 });
  T(s, `${D.profile.careerStart} ~ 현재 · 총 ${fmtMonths(totalMonths)}`, { x: rx, y: 1.85, w: rw, h: 0.4, fontSize: 15, bold: true, color: C.ink });
  D.careers.forEach((c, i) => {
    const y = 2.5 + i * 1.75;
    s.addShape(pres.ShapeType.roundRect, { x: rx, y, w: rw, h: 1.55, rectRadius: 0.08, fill: { color: C.soft }, line: { color: C.line } });
    T(s, `${c.period} (${fmtMonths(monthsBetween(c.period))})`, { x: rx + 0.25, y: y + 0.18, w: rw - 0.5, h: 0.3, fontSize: 10.5, color: C.muted });
    T(s, c.org, { x: rx + 0.25, y: y + 0.5, w: rw - 0.5, h: 0.42, fontSize: 15, bold: true, color: C.ink });
    T(s, c.role, { x: rx + 0.25, y: y + 0.95, w: rw - 0.5, h: 0.45, fontSize: 11.5, color: C.accent, bold: true });
  });
  footer(s); pageNum(s);
}

/* ================= 3. Skills ================= */
{
  const s = pres.addSlide(); s.background = { color: C.white };
  T(s, "Skills", { x: M, y: 0.5, w: 8, h: 0.7, fontSize: 36, bold: true, color: C.ink });
  const cols = 3, gap = 0.3, cw = (W - 2 * M - gap * (cols - 1)) / cols, ch = 2.35;
  D.skills.forEach((g, i) => {
    const x = M + (i % cols) * (cw + gap), y = 1.45 + Math.floor(i / cols) * (ch + gap);
    s.addShape(pres.ShapeType.roundRect, { x, y, w: cw, h: ch, rectRadius: 0.1, fill: { color: C.soft }, line: { color: C.line } });
    circleNo(s, i + 1, x + 0.25, y + 0.25, 0.4, { pt: 11 });
    T(s, g.group, { x: x + 0.78, y: y + 0.22, w: cw - 1, h: 0.45, fontSize: 15, bold: true, color: C.ink, valign: "middle" });
    const runs = [];
    (g.sub || [{ items: g.items }]).forEach((sg, j, arr) => {
      if (sg.label) runs.push({ text: `${sg.label}  `, options: { bold: true, color: C.accent } });
      runs.push({ text: sg.items.join("  ·  "), options: { color: C.ink2, breakLine: j < arr.length - 1, paraSpaceAfter: 6 } });
    });
    T(s, runs, { x: x + 0.25, y: y + 0.85, w: cw - 0.5, h: ch - 1.05, fontSize: 11.5, lineSpacingMultiple: 1.3 });
  });
  footer(s); pageNum(s);
}

/* ================= 4-5. Career (one per org) ================= */
D.careers.forEach((c) => {
  const s = pres.addSlide(); s.background = { color: C.white };
  T(s, "Career", { x: M, y: 0.5, w: 8, h: 0.7, fontSize: 36, bold: true, color: C.ink });
  const lw = 3.9;
  T(s, `${c.period}  (${fmtMonths(monthsBetween(c.period))})`, { x: M, y: 1.5, w: lw, h: 0.35, fontSize: 12, bold: true, color: C.accent });
  T(s, c.org, { x: M, y: 1.9, w: lw, h: 1.0, fontSize: 24, bold: true, color: C.ink });
  T(s, c.role, { x: M, y: 2.95, w: lw, h: 0.7, fontSize: 13, bold: true, color: C.ink2 });
  if (c.note) {
    s.addShape(pres.ShapeType.roundRect, { x: M, y: 3.8, w: lw, h: 1.25, rectRadius: 0.08, fill: { color: C.accentSoft }, line: { color: C.accentSoft } });
    T(s, c.note, { x: M + 0.2, y: 3.95, w: lw - 0.4, h: 1.0, fontSize: 11, color: C.ink2, lineSpacingMultiple: 1.3 });
  }
  const rx = M + lw + 0.6, rw = W - M - rx;
  const paras = [].concat(c.intro || []);
  let pt = 13; while (blockH(paras, pt, rw - 0.5, 0.16) > 5.0 && pt > 10) pt -= 0.5;
  s.addShape(pres.ShapeType.roundRect, { x: rx, y: 1.45, w: rw, h: 5.35, rectRadius: 0.1, fill: { color: C.soft }, line: { color: C.line } });
  T(s, "COMMENT", { x: rx + 0.3, y: 1.62, w: 3, h: 0.28, fontSize: 10, bold: true, color: C.accent, charSpacing: 3 });
  T(s, paras.map((t, i) => ({ text: t, options: { breakLine: i < paras.length - 1, paraSpaceAfter: 8 } })), { x: rx + 0.3, y: 1.95, w: rw - 0.6, h: 4.7, fontSize: pt, color: C.ink2, lineSpacingMultiple: 1.35 });
  footer(s); pageNum(s);
});

/* ================= Projects ================= */
D.groups.forEach((g, gi) => {
  const ps = g.projects.map((id) => byId.get(id)).filter(Boolean);
  const orgs = Array.from(new Set(ps.map((p) => D.orgs[p.org] || p.org)));
  const idx = String(gi + 1).padStart(2, "0");

  if (ps.length > 1) {
    const s = pres.addSlide(); s.background = { color: C.navy };
    T(s, "PROJECT", { x: M, y: 1.3, w: 6, h: 0.35, fontSize: 12, bold: true, color: C.accent, charSpacing: 4 });
    T(s, idx, { x: M, y: 1.7, w: 3, h: 1.3, fontSize: 72, bold: true, color: C.white });
    const tpt = g.title.length > 26 ? 26 : 30;
    const th = lines(g.title, tpt, 11.5) * lineH(tpt, 1.25) + 0.1;
    T(s, g.title, { x: M, y: 3.05, w: 11.5, h: th, fontSize: tpt, bold: true, color: C.white });
    T(s, `${orgs.join(" · ")}   |   ${periodRange(ps)}   |   ${ps.length}개 과업`, { x: M, y: 3.15 + th, w: 11, h: 0.35, fontSize: 13, color: C.iceOnDark });
    T(s, [{ text: "요약  ", options: { bold: true, color: C.accent } }, { text: g.plain, options: { color: C.white } }], { x: M, y: 3.75 + th, w: 11, h: 1.6, fontSize: 14, lineSpacingMultiple: 1.4 });
    // step list on the right? keep list of project titles
    footer(s, true); pageNum(s, true);
  }

  ps.forEach((p, pi) => {
    const s = pres.addSlide(); s.background = { color: C.white };
    const org = D.orgs[p.org] || p.org;
    // header
    T(s, [{ text: `${idx}  ${g.title}`, options: { bold: true, color: C.accent } }, ...(ps.length > 1 ? [{ text: `   ·   ${pi + 1} / ${ps.length}`, options: { color: C.muted } }] : [])],
      { x: M, y: 0.4, w: W - 2 * M, h: 0.3, fontSize: 11 });
    T(s, p.title, { x: M, y: 0.72, w: W - 2 * M, h: 0.62, fontSize: p.title.length > 30 ? 22 : 26, bold: true, color: C.ink, valign: "middle" });
    const meta = [org, p.period, p.track].filter(Boolean).join("   ·   ") + "      " + (p.category || []).join(" / ");
    T(s, meta, { x: M, y: 1.36, w: W - 2 * M, h: 0.3, fontSize: 10.5, color: C.muted });

    const top = 1.8, bottom = H - 0.55;
    const hasImg = p.images && p.images.length;
    const lw = hasImg ? 6.6 : 7.4, gap = 0.45;
    const rx = M + lw + gap, rw = W - M - rx;

    /* ---- left column: 요약 / summary / description ---- */
    const descBlocks = [].concat(p.description || []).flatMap((b) => Array.isArray(b) ? b.map((x, i) => `${i + 1}. ${x}`) : [b]);
    const leftTexts = [p.oneLiner, p.summary].filter(Boolean);
    let lpt = 12.5;
    const leftH = (pt) => blockH(leftTexts, pt, lw - 0.1, 0.12) + (descBlocks.length ? 0.25 + blockH(descBlocks, pt - 0.5, lw - 0.6, 0.1) + 0.3 : 0);
    while (leftH(lpt) > bottom - top && lpt > 9.5) lpt -= 0.5;

    let y = top;
    if (p.oneLiner) {
      const h = lines(p.oneLiner, lpt, lw - 0.1) * lineH(lpt) + 0.05;
      T(s, [{ text: "요약  ", options: { bold: true, color: C.accent } }, { text: p.oneLiner, options: { color: C.ink, bold: true } }], { x: M, y, w: lw, h, fontSize: lpt, lineSpacingMultiple: 1.35 });
      y += h + 0.12;
    }
    if (p.summary) {
      const h = lines(p.summary, lpt, lw - 0.1) * lineH(lpt) + 0.05;
      T(s, p.summary, { x: M, y, w: lw, h, fontSize: lpt, color: C.ink2, lineSpacingMultiple: 1.35 });
      y += h + 0.15;
    }
    if (descBlocks.length) {
      const dpt = lpt - 0.5;
      const h = blockH(descBlocks, dpt, lw - 0.6, 0.1) + 0.3;
      s.addShape(pres.ShapeType.roundRect, { x: M, y, w: lw, h: Math.min(h, bottom - y), rectRadius: 0.08, fill: { color: C.soft }, line: { color: C.line } });
      T(s, descBlocks.map((t, i) => ({ text: t, options: { breakLine: i < descBlocks.length - 1, paraSpaceAfter: 6 } })), { x: M + 0.3, y: y + 0.15, w: lw - 0.6, h: Math.min(h, bottom - y) - 0.25, fontSize: dpt, color: C.ink2, lineSpacingMultiple: 1.35 });
      y += h + 0.1;
    }

    /* ---- right column: image / roles / highlights / tech ---- */
    let ry = top;
    const sections = [];
    if (p.role && p.role.length) sections.push(["역할 · 수행 내용", p.role]);
    if (p.highlights && p.highlights.length) sections.push(["주요 성과 · 포인트", p.highlights]);
    const techLine = (p.tech || []).join("  ·  ");
    const techH = techLine ? 0.28 + lines(techLine, 9.5, rw) * lineH(9.5, 1.25) + 0.1 : 0;
    const techLeft = techLine && (bottom - y) >= techH + 0.15;
    const rightH = (pt) => sections.reduce((h, [, items]) => h + 0.32 + blockH(items, pt, rw - 0.3, 0.06) + 0.18, 0);
    let rpt = 11.5;
    let ih = 0, iw = rw;
    const leftSpare = bottom - y - (techLeft ? techH + 0.15 : 0);
    const rightCrowded = hasImg && rightH(10.5) > bottom - top - 2.2;
    if (hasImg && rightCrowded && leftSpare >= 2.0) {
      // crowded right column: put the image under the left-column text instead
      const im = p.images[0];
      let lih = Math.min(leftSpare - 0.1, lw * im.h / im.w), liw = lih * im.w / im.h;
      if (liw > lw) { liw = lw; lih = lw * im.h / im.w; }
      s.addImage({ path: im.abs, x: M, y: y + 0.05, w: liw, h: lih });
      y += lih + 0.15;
    } else if (hasImg) {
      const im = p.images[0];
      ih = rw * im.h / im.w; if (ih > 2.6) { ih = 2.6; iw = 2.6 * im.w / im.h; }
      while (rightH(rpt) > bottom - (top + ih + 0.2) - (techLeft ? 0 : techH) && (rpt > 9 || ih > 1.4)) {
        if (rpt > 9) rpt -= 0.5; else { ih -= 0.1; iw = ih * im.w / im.h; }
      }
      s.addImage({ path: im.abs, x: rx, y: ry, w: Math.min(iw, rw), h: ih });
      ry += ih + 0.2;
    }
    const avail = bottom - ry - (techLeft ? 0 : techH);
    while (rightH(rpt) > avail && rpt > 8) rpt -= 0.5;
    sections.forEach(([label, items]) => {
      T(s, label.toUpperCase(), { x: rx, y: ry, w: rw, h: 0.28, fontSize: 9.5, bold: true, color: C.accent, charSpacing: 2 });
      ry += 0.3;
      const h = blockH(items, rpt, rw - 0.3, 0.06) + 0.05;
      T(s, items.map((t, i) => ({ text: t, options: { bullet: { indent: 12 }, breakLine: i < items.length - 1, paraSpaceAfter: 4 } })), { x: rx, y: ry, w: rw, h, fontSize: rpt, color: C.ink, lineSpacingMultiple: 1.3 });
      ry += h + 0.18;
    });
    if (techLine) {
      const tx = techLeft ? M : rx, tw = techLeft ? lw : rw;
      const ty = techLeft ? Math.max(y + 0.05, bottom - techH) : Math.min(ry, bottom - techH);
      T(s, "연관 기술", { x: tx, y: ty, w: tw, h: 0.26, fontSize: 9.5, bold: true, color: C.accent, charSpacing: 2 });
      T(s, techLine, { x: tx, y: ty + 0.28, w: tw, h: techH - 0.28, fontSize: 9.5, color: C.muted, lineSpacingMultiple: 1.25 });
    }
    footer(s); pageNum(s);
  });
});

const out = path.join(root, "assets", "Dongsu_Park_Portfolio.pptx");
pres.writeFile({ fileName: out }).then(() => console.log(`PPTX written: ${path.relative(root, out)} (${pageNo} slides)`));
