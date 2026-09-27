/* =========================================================
   Portfolio app
   - 데이터는 assets/js/data.js (window.PORTFOLIO)
   - 프로젝트 상세는 #project/<id> 해시로 딥링크 가능
   ========================================================= */
(function () {
  "use strict";

  const D = window.PORTFOLIO;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Theme ---------- */
  const THEME_KEY = "portfolio-theme";
  function applyTheme(theme) {
    if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
  }
  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- Hero typing ---------- */
  function initTyping() {
    const el = $("#typing");
    const roles = D.profile.roles;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = roles[0]; return; }

    let roleIdx = 0, charIdx = 0, deleting = false;
    function tick() {
      const word = roles[roleIdx];
      if (!deleting) {
        charIdx++;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) { deleting = true; return setTimeout(tick, 1800); }
        return setTimeout(tick, 90);
      }
      charIdx--;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; return setTimeout(tick, 350); }
      return setTimeout(tick, 45);
    }
    setTimeout(tick, 400);
  }

  /* ---------- Static sections ---------- */
  /* ---------- Career duration helpers ---------- */
  function ym(str) {
    const m = /(\d{4})\.(\d{1,2})/.exec(str || "");
    if (!m) return null;
    return { y: +m[1], m: +m[2] };
  }
  function monthsBetween(period) {
    const [a, b] = String(period).split("~").map((t) => t.trim());
    const s = ym(a);
    if (!s) return 0;
    const now = new Date();
    const e = ym(b) || { y: now.getFullYear(), m: now.getMonth() + 1 };
    return Math.max(0, (e.y - s.y) * 12 + (e.m - s.m) + 1);
  }
  function fmtMonths(n) {
    const y = Math.floor(n / 12), m = n % 12;
    return [y ? `${y}년` : "", m ? `${m}개월` : ""].filter(Boolean).join(" ") || "0개월";
  }

  function renderProfile() {
    const p = D.profile;
    $("#heroName").textContent = p.name;
    $("#heroNameEn").textContent = p.nameEn;
    $("#heroTagline").textContent = p.tagline;
    $("#aboutIntro").innerHTML = p.intro.map((t) => `<p>${esc(t)}</p>`).join("");
    const totalMonths = D.careers.reduce((n, c) => n + monthsBetween(c.period), 0);

    $("#skills").innerHTML = D.skills.map((g) => `
      <div class="skill">
        <div class="skill__group">${esc(g.group)}</div>
        <div class="skill__items">${g.items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div>
      </div>`).join("");

    $("#careerTotal").textContent = `총 경력 ${fmtMonths(totalMonths)}`;
    $("#careerList").innerHTML = D.careers.map((c) => `
      <li class="timeline__item">
        <div class="timeline__period">${esc(c.period)} <span class="timeline__duration">(${fmtMonths(monthsBetween(c.period))})</span></div>
        <div class="timeline__org">${esc(c.org)}</div>
        <div class="timeline__role">${esc(c.role)}</div>
        ${c.note ? `<div class="timeline__note">${esc(c.note)}</div>` : ""}
        ${c.intro ? `
          <div class="timeline__block">
            <div class="timeline__label">Comment</div>
            <div class="timeline__intro">${[].concat(c.intro).map((t) => `<p>${esc(t)}</p>`).join("")}</div>
          </div>` : ""}
        ${c.items && c.items.length
          ? `<div class="timeline__block">
              <div class="timeline__label">주요 업무</div>
              <ul class="timeline__items">${c.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            </div>`
          : `<p class="timeline__summary">${esc(c.summary || "")}</p>`}
      </li>`).join("");

    $("#contactLinks").innerHTML = `
      <a class="contact__link" href="mailto:${esc(p.email)}"><span>✉</span><span>${esc(p.email)}</span></a>`;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Projects: org filter + story groups ---------- */
  const state = { org: "all" };
  const byId = new Map(D.projects.map((p) => [p.id, p]));
  const groupOf = new Map();
  D.groups.forEach((g) => g.projects.forEach((id) => groupOf.set(id, g)));
  let visible = []; // 현재 화면에 보이는 과업(스토리 순서) — 모달 이전/다음 이동에 사용

  function groupProjects(g) {
    return g.projects.map((id) => byId.get(id)).filter(Boolean)
      .filter((p) => state.org === "all" || p.org === state.org);
  }

  // 여러 과업의 기간 문자열에서 전체 범위("2018.07 ~ 2022.10", "2023.01 ~ 현재")를 구함
  function periodRange(ps) {
    const toks = [];
    let ongoing = false;
    ps.forEach((p) => {
      (String(p.period).match(/\b(19|20)\d{2}(\.\d{2})?/g) || []).forEach((t) => toks.push(t));
      if (/현재/.test(p.period)) ongoing = true;
    });
    if (!toks.length) return "";
    const key = (t) => t.length === 4 ? t + ".00" : t;
    toks.sort((a, b) => key(a).localeCompare(key(b)));
    const first = toks[0], last = toks[toks.length - 1];
    return `${first} ~ ${ongoing ? "현재" : last}`;
  }

  function renderFilters() {
    const orgCounts = {};
    D.projects.forEach((p) => { orgCounts[p.org] = (orgCounts[p.org] || 0) + 1; });
    const orgs = [["all", "전체", D.projects.length]].concat(Object.keys(D.orgs).map((k) => [k, D.orgs[k], orgCounts[k] || 0]));
    $("#orgFilters").innerHTML = orgs.map(([k, label, n]) =>
      `<button type="button" class="chip${state.org === k ? " is-active" : ""}" data-org="${esc(k)}" aria-pressed="${state.org === k}">${esc(label)}<span class="chip__count">${n}</span></button>`).join("");
  }

  function renderGroups() {
    visible = [];
    const html = [];
    let n = 0;
    D.groups.forEach((g) => {
      const ps = groupProjects(g);
      if (!ps.length) return;
      n += 1;
      visible.push(...ps);
      const orgs = Array.from(new Set(ps.map((p) => D.orgs[p.org] || p.org)));
      html.push(`
      <article class="story" id="story-${esc(g.id)}">
        <header class="story__head">
          <div class="story__index">${String(n).padStart(2, "0")}</div>
          <div class="story__headbody">
            <div class="story__meta">
              ${orgs.map((o) => `<span class="story__org">${esc(o)}</span>`).join("")}
              <span class="story__period">${esc(periodRange(ps))}</span>
              <span class="story__count">${ps.length}개 과업</span>
            </div>
            <h3 class="story__title">${esc(g.title)}</h3>
            ${g.plain ? `<p class="story__plain"><b>쉽게 말하면</b>${esc(g.plain)}</p>` : ""}
          </div>
        </header>
        <ol class="story__steps${ps.length === 1 ? " story__steps--single" : ""}">
          ${ps.map((p, i) => `
          <li class="story__step">
            <button type="button" class="step" data-id="${esc(p.id)}" aria-haspopup="dialog">
              <span class="step__no">${i + 1}</span>
              <span class="step__body">
                <span class="step__meta">
                  <span class="step__period">${esc(p.period)}</span>
                  ${orgs.length > 1 ? `<span class="step__org">${esc(D.orgs[p.org] || p.org)}</span>` : ""}
                </span>
                ${ps.length === 1 && p.title === g.title ? "" : `<span class="step__title">${esc(p.title)}</span>`}
                ${p.oneLiner ? `<span class="step__line">${esc(p.oneLiner)}</span>` : ""}
              </span>
              <span class="step__more">자세히 →</span>
            </button>
          </li>`).join("")}
        </ol>
      </article>`);
    });
    $("#projectGroups").innerHTML = html.length ? html.join("") : `<div class="projects__empty">조건에 맞는 과업이 없습니다.</div>`;
  }

  function initFilters() {
    $("#orgFilters").addEventListener("click", (e) => {
      const b = e.target.closest("[data-org]"); if (!b) return;
      state.org = b.dataset.org; renderFilters(); renderGroups();
    });
    $("#projectGroups").addEventListener("click", (e) => {
      const c = e.target.closest(".step"); if (!c) return;
      openProject(c.dataset.id, true);
    });
  }

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  const dialog = $(".modal__dialog", modal);
  let lastFocus = null;
  let currentId = null;

  function detailHTML(p) {
    const section = (label, inner) => inner ? `<div class="detail__section"><div class="detail__label">${label}</div>${inner}</div>` : "";
    const list = (arr) => arr && arr.length ? `<ul class="detail__list">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
    const tags = (arr) => arr && arr.length ? `<div class="detail__tags">${arr.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>` : "";
    const links = (arr) => arr && arr.length ? `<div class="detail__links">${arr.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : "";
    const gallery = (arr) => arr && arr.length ? `<div class="detail__gallery">${arr.map((im) => `
        <figure class="detail__figure">
          <a href="${esc(im.src)}" target="_blank" rel="noopener" title="원본 크기로 보기"><img src="${esc(im.src)}" alt="${esc(im.alt || "")}" loading="lazy" /></a>
          ${im.caption ? `<figcaption>${esc(im.caption)}</figcaption>` : ""}
        </figure>`).join("")}</div>` : "";
    const facts = [
      p.track ? `<span class="detail__fact"><b>구분</b>${esc(p.track)}</span>` : "",
      p.team ? `<span class="detail__fact"><b>참여 인원</b>${esc(p.team)}</span>` : ""
    ].filter(Boolean).join("");
    const desc = (d) => {
      if (!d) return "";
      const blocks = Array.isArray(d) ? d : [d];
      const html = blocks
        .map((b) =>
          Array.isArray(b)
            ? `<ol class="detail__steps">${b.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>`
            : `<p>${esc(b)}</p>`
        )
        .join("");
      return `<div class="detail__desc">${html}</div>`;
    };
    const g = groupOf.get(p.id);
    const gps = g ? groupProjects(g) : [];
    const gi = gps.findIndex((x) => x.id === p.id);
    const story = g && gps.length
      ? `<div class="detail__story"><span class="detail__storylabel">Story</span>${esc(g.title)}<span class="detail__storypos">${gi + 1} / ${gps.length}</span></div>`
      : "";
    return `
      ${story}
      <div class="detail__meta">
        <span class="detail__org">${esc(D.orgs[p.org] || p.org)}</span>
        <span class="detail__period">${esc(p.period)}</span>
        ${p.category.map((c) => `<span class="tag tag--accent">${esc(c)}</span>`).join("")}
      </div>
      <h2 class="detail__title" id="modalTitle">${esc(p.title)}</h2>
      ${p.oneLiner ? `<p class="detail__easy"><b>쉽게 말하면</b>${esc(p.oneLiner)}</p>` : ""}
      <p class="detail__summary">${esc(p.summary)}</p>
      ${facts ? `<div class="detail__facts">${facts}</div>` : ""}
      ${desc(p.description)}
      ${section("화면 · 구성도", gallery(p.images))}
      ${section("역할 · 수행 내용", list(p.role))}
      ${section("주요 성과 · 포인트", list(p.highlights))}
      ${section("연관 기술", tags(p.tech))}
      ${section("링크", links(p.links))}`;
  }

  function openProject(id, pushHash) {
    const p = D.projects.find((x) => x.id === id);
    if (!p) return;
    currentId = id;
    $("#modalBody").innerHTML = detailHTML(p);
    $("#modalBody").scrollTop = 0;

    const idx = visible.findIndex((x) => x.id === id);
    const prev = idx > 0 ? visible[idx - 1] : null;
    const next = idx >= 0 && idx < visible.length - 1 ? visible[idx + 1] : null;
    const short = (t) => t.length > 22 ? t.slice(0, 22) + "…" : t;
    $("#modalPrev").disabled = !prev;
    $("#modalNext").disabled = !next;
    $("#modalPrev").innerHTML = prev ? `← <span class="modal__navtext">${esc(short(prev.title))}</span>` : "← 이전";
    $("#modalNext").innerHTML = next ? `<span class="modal__navtext">${esc(short(next.title))}</span> →` : "다음 →";
    $("#modalPrev").title = prev ? prev.title : "";
    $("#modalNext").title = next ? next.title : "";

    if (modal.hidden) {
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }
    dialog.focus();
    if (pushHash) history.pushState(null, "", `#project/${id}`);
  }

  function closeModal(popHash) {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    currentId = null;
    if (popHash && location.hash.startsWith("#project/")) history.pushState(null, "", "#projects");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(delta) {
    const idx = visible.findIndex((x) => x.id === currentId);
    const next = visible[idx + delta];
    if (next) openProject(next.id, true);
  }

  function initModal() {
    modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(true); });
    $("#modalPrev").addEventListener("click", () => step(-1));
    $("#modalNext").addEventListener("click", () => step(1));
    document.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") closeModal(true);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "Tab") trapFocus(e);
    });
    window.addEventListener("popstate", handleHash);
  }

  function trapFocus(e) {
    const f = $$('button, a[href], [tabindex]:not([tabindex="-1"])', dialog).filter((el) => !el.disabled && el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function handleHash() {
    const m = location.hash.match(/^#project\/(.+)$/);
    if (m) {
      const id = decodeURIComponent(m[1]);
      if (!visible.some((x) => x.id === id)) { state.org = "all"; renderFilters(); renderGroups(); }
      openProject(id, false);
    } else {
      closeModal(false);
    }
  }

  /* ---------- To-top ---------- */
  function initScroll() {
    const toTop = $("#toTop");
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    function onScroll() {
      toTop.classList.toggle("is-visible", window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderProfile();
    renderFilters();
    renderGroups();
    initFilters();
    initModal();
    initTyping();
    initScroll();
    handleHash();
  });
})();
