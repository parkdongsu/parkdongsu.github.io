/* Renders the whole portfolio into a print-friendly document (see print.html / scripts/build-pdf.js). */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function ym(str) { const m = /(\d{4})\.(\d{1,2})/.exec(str || ""); return m ? { y: +m[1], m: +m[2] } : null; }
  function monthsBetween(period) {
    const [a, b] = String(period).split("~").map((t) => t.trim());
    const s = ym(a); if (!s) return 0;
    const now = new Date();
    const e = ym(b) || { y: now.getFullYear(), m: now.getMonth() + 1 };
    return Math.max(0, (e.y - s.y) * 12 + (e.m - s.m) + 1);
  }
  function fmtMonths(n) { const y = Math.floor(n / 12), m = n % 12; return [y ? `${y}년` : "", m ? `${m}개월` : ""].filter(Boolean).join(" ") || "0개월"; }
  function periodRange(ps) {
    const toks = []; let ongoing = false;
    ps.forEach((p) => { (String(p.period).match(/\b(19|20)\d{2}(\.\d{2})?/g) || []).forEach((t) => toks.push(t)); if (/현재/.test(p.period)) ongoing = true; });
    if (!toks.length) return "";
    const key = (t) => t.length === 4 ? t + ".00" : t;
    toks.sort((a, b) => key(a).localeCompare(key(b)));
    return `${toks[0]} ~ ${ongoing ? "현재" : toks[toks.length - 1]}`;
  }

  const tags = (arr, cls = "tag") => (arr || []).map((t) => `<span class="${cls}">${esc(t)}</span>`).join("");
  const list = (arr) => arr && arr.length ? `<ul class="list">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  const section = (label, inner) => inner ? `<div class="label">${label}</div>${inner}` : "";
  const desc = (d) => {
    if (!d) return "";
    const blocks = Array.isArray(d) ? d : [d];
    return `<div class="project__desc">${blocks.map((b) => Array.isArray(b) ? `<ol>${b.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>` : `<p>${esc(b)}</p>`).join("")}</div>`;
  };
  const figures = (imgs) => (imgs || []).map((im) => `
    <figure class="figure"><img src="${esc(im.src)}" alt="${esc(im.alt || "")}" />${im.caption ? `<figcaption>${esc(im.caption)}</figcaption>` : ""}</figure>`).join("");

  const p = D.profile;
  const totalMonths = D.careers.reduce((n, c) => n + monthsBetween(c.period), 0);
  const byId = new Map(D.projects.map((x) => [x.id, x]));

  /* ---- Cover + About + Skills ---- */
  let html = `
  <section class="section cover">
    <div class="cover__eyebrow">Healthcare IT · Infra · Full-Stack</div>
    <h1 class="cover__name">${esc(p.name)}<span>${esc(p.nameEn)}</span></h1>
    <div class="cover__roles">${p.roles.map(esc).join(" · ")}</div>
    <p class="cover__tagline">${esc(p.tagline)}</p>
    <div class="cover__meta"><span>Career ${esc(p.careerStart)} ~ 현재 (${fmtMonths(totalMonths)})</span><span>${esc(p.email)}</span></div>

    <h2 class="section__title">About me</h2>
    <div class="about">${p.intro.map((t) => `<p>${esc(t)}</p>`).join("")}</div>

    <h2 class="section__title">Skills</h2>
    <div class="skills">${D.skills.map((g) => `
      <div class="skill">
        <div class="skill__group">${esc(g.group)}</div>
        <div>${(g.sub || [{ items: g.items || [] }]).map((sg) => `<span class="skill__sub">${sg.label ? `<span class="skill__sublabel">${esc(sg.label)}:</span>` : ""}${tags(sg.items)}</span>`).join("")}</div>
      </div>`).join("")}</div>
  </section>`;

  /* ---- Career ---- */
  html += `
  <section class="section section--career">
    <h2 class="section__title">Career</h2>
    <div class="career__total">총 경력 ${fmtMonths(totalMonths)}</div>
    ${D.careers.map((c) => `
    <div class="job">
      <div class="job__period">${esc(c.period)} <b>(${fmtMonths(monthsBetween(c.period))})</b></div>
      <div class="job__org">${esc(c.org)}</div>
      <div class="job__role">${esc(c.role)}</div>
      ${c.note ? `<div class="job__note">${esc(c.note)}</div>` : ""}
      ${c.intro ? `<div class="job__intro">${[].concat(c.intro).map((t) => `<p>${esc(t)}</p>`).join("")}</div>` : ""}
    </div>`).join("")}
  </section>`;

  /* ---- Projects ---- */
  D.groups.forEach((g, gi) => {
    const ps = g.projects.map((id) => byId.get(id)).filter(Boolean);
    if (!ps.length) return;
    const orgs = Array.from(new Set(ps.map((x) => D.orgs[x.org] || x.org)));
    html += `
  <section class="section group">
    <div class="group__head">
      <div class="group__index">${String(gi + 1).padStart(2, "0")}</div>
      <div>
        <div class="group__meta">${orgs.map((o) => `<b>${esc(o)}</b>`).join("")}<span>${esc(periodRange(ps))}</span>${ps.length > 1 ? `<span>${ps.length}개 과업</span>` : ""}</div>
        <h2 class="group__title">${esc(g.title)}</h2>
        ${g.plain ? `<p class="group__plain"><span class="badge">요약</span>${esc(g.plain)}</p>` : ""}
      </div>
    </div>
    ${ps.map((x, i) => `
    <article class="project">
      <div class="project__head">
        <div class="project__meta"><b>${esc(D.orgs[x.org] || x.org)}</b><span>${esc(x.period)}</span>${x.track ? `<span>${esc(x.track)}</span>` : ""}${tags(x.category, "tag tag--accent")}</div>
        <h3 class="project__title">${ps.length > 1 ? `<small>${i + 1} / ${ps.length}</small>` : ""}${esc(x.title)}</h3>
        ${x.oneLiner ? `<p class="project__easy"><span class="badge">요약</span>${esc(x.oneLiner)}</p>` : ""}
        ${x.summary ? `<p class="project__summary">${esc(x.summary)}</p>` : ""}
      </div>
      ${desc(x.description)}
      ${figures(x.images)}
      ${section("역할 · 수행 내용", list(x.role))}
      ${section("주요 성과 · 포인트", list(x.highlights))}
      ${section("연관 기술", `<div class="tags">${tags(x.tech)}</div>`)}
    </article>`).join("")}
  </section>`;
  });

  document.getElementById("doc").innerHTML = html;
})();
