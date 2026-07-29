/* Manual light/dark/auto theme toggle. Renders a segmented control fixed to
   the top-right corner of every page (see .theme-toggle in style.css). No
   framework, no build step — include this <script> on every page in the
   site; there's no shared layout to mount it in once. */
(function () {
  "use strict";

  var STORAGE_KEY = "cca-f-theme";

  function getMode() {
    return localStorage.getItem(STORAGE_KEY) || "auto";
  }

  function applyMode(mode) {
    if (mode === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", mode);
    }
  }

  function setMode(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    applyMode(mode);
  }

  applyMode(getMode());

  var ICONS = {
    sun:
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon:
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
    auto:
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none"/></svg>',
  };

  var OPTIONS = [
    { mode: "light", label: "Light", icon: ICONS.sun },
    { mode: "auto", label: "Auto", icon: ICONS.auto },
    { mode: "dark", label: "Dark", icon: ICONS.moon },
  ];

  function render(wrap) {
    var mode = getMode();
    wrap.innerHTML = "";
    OPTIONS.forEach(function (o) {
      var btn = document.createElement("button");
      btn.className = "theme-toggle-opt" + (o.mode === mode ? " active" : "");
      btn.innerHTML = o.icon + "<span>" + o.label + "</span>";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", String(o.mode === mode));
      btn.addEventListener("click", function () {
        setMode(o.mode);
        render(wrap);
      });
      wrap.appendChild(btn);
    });
  }

  function mount() {
    var wrap = document.createElement("div");
    wrap.className = "theme-toggle";
    wrap.setAttribute("role", "radiogroup");
    wrap.setAttribute("aria-label", "Color theme");
    render(wrap);
    document.body.appendChild(wrap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
