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
  function renderProfile() {
    const p = D.profile;
    $("#heroName").textContent = p.name;
    $("#heroNameEn").textContent = p.nameEn;
    $("#heroTagline").textContent = p.tagline;
    $("#aboutIntro").innerHTML = p.intro.map((t) => `<p>${esc(t)}</p>`).join("");
    $("#aboutFacts").innerHTML = [
      ["Name", `${esc(p.name)} (${esc(p.nameEn)})`],
      ["Email", `<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>`],
      ["Location", esc(p.location)],
      ["Career", `${esc(p.careerStart)} ~ 현재`],
      ["GitHub", `<a href="${esc(p.github)}" target="_blank" rel="noopener">${esc(p.github.replace(/^https?:\/\//, ""))}</a>`]
    ].map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");

    $("#skills").innerHTML = D.skills.map((g) => `
      <div class="skill">
        <div class="skill__group">${esc(g.group)}</div>
        <div class="skill__items">${g.items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div>
      </div>`).join("");

    $("#careerList").innerHTML = D.careers.map((c) => `
      <li class="timeline__item">
        <div class="timeline__period">${esc(c.period)}</div>
        <div class="timeline__org">${esc(c.org)}</div>
        <div class="timeline__role">${esc(c.role)}</div>
        <p class="timeline__summary">${esc(c.summary)}</p>
      </li>`).join("");

    $("#contactLinks").innerHTML = `
      <a class="contact__link" href="mailto:${esc(p.email)}"><span>✉</span><span>${esc(p.email)}</span></a>`;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Projects: filters + grid ---------- */
  const state = { org: "all", cat: "all" };
  let visible = []; // currently visible projects (for modal prev/next)

  function categories() {
    const set = new Map();
    D.projects.forEach((p) => p.category.forEach((c) => set.set(c, (set.get(c) || 0) + 1)));
    return Array.from(set.entries()).sort((a, b) => b[1] - a[1]);
  }

  function renderFilters() {
    const orgCounts = {};
    D.projects.forEach((p) => { orgCounts[p.org] = (orgCounts[p.org] || 0) + 1; });
    const orgs = [["all", "전체", D.projects.length]].concat(Object.keys(D.orgs).map((k) => [k, D.orgs[k], orgCounts[k] || 0]));
    $("#orgFilters").innerHTML = orgs.map(([k, label, n]) =>
      `<button type="button" class="chip${state.org === k ? " is-active" : ""}" data-org="${esc(k)}" aria-pressed="${state.org === k}">${esc(label)}<span class="chip__count">${n}</span></button>`).join("");

    const cats = [["all", "전체"]].concat(categories().map(([c]) => [c, c]));
    $("#catFilters").innerHTML = cats.map(([k, label]) =>
      `<button type="button" class="chip${state.cat === k ? " is-active" : ""}" data-cat="${esc(k)}" aria-pressed="${state.cat === k}">${esc(label)}</button>`).join("");
  }

  function filtered() {
    return D.projects.filter((p) =>
      (state.org === "all" || p.org === state.org) &&
      (state.cat === "all" || p.category.includes(state.cat)));
  }

  function renderGrid() {
    visible = filtered();
    const grid = $("#projectGrid");
    $("#projectCount").textContent = `${visible.length}개의 과업`;
    if (!visible.length) {
      grid.innerHTML = `<div class="projects__empty">조건에 맞는 과업이 없습니다.</div>`;
      return;
    }
    grid.innerHTML = visible.map((p, i) => `
      <button type="button" class="card${p.images && p.images.length ? " card--has-thumb" : ""}" data-id="${esc(p.id)}" style="animation-delay:${Math.min(i, 12) * 30}ms" aria-haspopup="dialog">
        ${p.images && p.images.length ? `<img class="card__thumb" src="${esc(p.images[0].src)}" alt="" loading="lazy" />` : ""}
        <div class="card__meta">
          <span class="card__org">${esc(D.orgs[p.org] || p.org)}</span>
          <span class="card__period">${esc(p.period.split(" (")[0].split(" ·")[0])}</span>
        </div>
        <h3 class="card__title">${esc(p.title)}</h3>
        <p class="card__summary">${esc(p.summary)}</p>
        <div class="card__tags">${p.category.map((c) => `<span class="tag tag--accent">${esc(c)}</span>`).join("")}</div>
        <span class="card__more">자세히 보기 →</span>
      </button>`).join("");
  }

  function initFilters() {
    $("#orgFilters").addEventListener("click", (e) => {
      const b = e.target.closest("[data-org]"); if (!b) return;
      state.org = b.dataset.org; renderFilters(); renderGrid();
    });
    $("#catFilters").addEventListener("click", (e) => {
      const b = e.target.closest("[data-cat]"); if (!b) return;
      state.cat = b.dataset.cat; renderFilters(); renderGrid();
    });
    $("#projectGrid").addEventListener("click", (e) => {
      const c = e.target.closest(".card"); if (!c) return;
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
    return `
      <div class="detail__meta">
        <span class="detail__org">${esc(D.orgs[p.org] || p.org)}</span>
        <span class="detail__period">${esc(p.period)}</span>
        ${p.category.map((c) => `<span class="tag tag--accent">${esc(c)}</span>`).join("")}
      </div>
      <h2 class="detail__title" id="modalTitle">${esc(p.title)}</h2>
      <p class="detail__summary">${esc(p.summary)}</p>
      ${facts ? `<div class="detail__facts">${facts}</div>` : ""}
      ${p.description ? `<p class="detail__desc">${esc(p.description)}</p>` : ""}
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
    $("#modalPrev").disabled = idx <= 0;
    $("#modalNext").disabled = idx < 0 || idx >= visible.length - 1;

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
      if (!visible.some((x) => x.id === id)) { state.org = "all"; state.cat = "all"; renderFilters(); renderGrid(); }
      openProject(id, false);
    } else {
      closeModal(false);
    }
  }

  /* ---------- Scroll spy + to-top ---------- */
  function initScroll() {
    const links = $$(".nav__menu a");
    const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
    const toTop = $("#toTop");
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    function onScroll() {
      toTop.classList.toggle("is-visible", window.scrollY > 500);
      const y = window.scrollY + 120;
      let active = null;
      sections.forEach((s) => { if (s.offsetTop <= y) active = s.id; });
      links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${active}`));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderProfile();
    renderFilters();
    renderGrid();
    initFilters();
    initModal();
    initTyping();
    initScroll();
    handleHash();
  });
})();
