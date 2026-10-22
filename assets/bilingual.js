// 双语引擎:所有文字都以「段」(seg) 为单位,每段同时持有中英文。
// 切换语言时,如果页面上有选中文字,会找出选区覆盖的段,
// 切换后把这些段高亮并滚动到视野内——即「选中中文,切到英文看对应原文」。
window.Bi = (function () {
  const STORAGE_KEY = "gapd-lang";
  const segs = new Map(); // element -> {zh, en}
  let lang = "zh";

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") lang = saved;
  } catch (e) {}

  // 创建一个双语元素;pair 为 {zh, en},纯字符串表示两种语言相同
  function seg(pair, tag = "span", className) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.dataset.seg = "";
    segs.set(el, typeof pair === "string" ? { zh: pair, en: pair } : pair);
    el.textContent = segs.get(el)[lang];
    return el;
  }

  function selectedSegs() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return [];
    const range = sel.getRangeAt(0);
    return [...segs.keys()].filter(
      (el) => el.isConnected && range.intersectsNode(el)
    );
  }

  function clearHits() {
    document.querySelectorAll(".bi-hit").forEach((el) => el.classList.remove("bi-hit"));
  }

  function setLang(next) {
    const hits = selectedSegs();
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = lang;
    segs.forEach((pair, el) => { el.textContent = pair[lang]; });

    if (hits.length) {
      window.getSelection().removeAllRanges();
      clearHits();
      hits.forEach((el) => el.classList.add("bi-hit"));
    }
    // 有高亮(本次选中或之前留下的)就滚动到第一处,来回切换时位置不丢
    const first = document.querySelector(".bi-hit");
    if (first) first.scrollIntoView({ block: "center", behavior: "smooth" });

    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.langBtn === lang));
    });
    document.dispatchEvent(new CustomEvent("bi:lang", { detail: lang }));
  }

  function toggle() { setLang(lang === "zh" ? "en" : "zh"); }

  function mountSwitch(container) {
    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Language");
    [["zh", "中"], ["en", "EN"]].forEach(([code, label]) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.dataset.langBtn = code;
      b.setAttribute("aria-pressed", String(code === lang));
      // 阻止 mousedown 的默认行为,点按钮时不会丢失页面上的文字选区
      b.addEventListener("mousedown", (e) => e.preventDefault());
      b.addEventListener("click", () => { if (code !== lang) setLang(code); });
      wrap.appendChild(b);
    });
    container.appendChild(wrap);
  }

  // 快捷键 L 切换语言
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() !== "l" || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.closest && e.target.closest("input, textarea, [contenteditable]")) return;
    toggle();
  });

  // 在高亮区域外点击时清除高亮
  document.addEventListener("mousedown", (e) => {
    if (!e.target.closest(".bi-hit, .lang-switch")) clearHits();
  });

  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  return {
    seg,
    setLang,
    toggle,
    mountSwitch,
    get lang() { return lang; },
  };
})();
