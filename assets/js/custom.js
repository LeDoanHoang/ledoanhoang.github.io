/**
 * custom.js — small extras for the split pages.
 *
 * 1) Publication page: each tab shows only the newest entries; a button under
 *    the list opens the full list. Change PUB_LIMIT to show more or fewer.
 * 2) Tab counters: the number on the Publication and Supervision tabs is
 *    counted from the list itself, so it never needs to be typed by hand.
 */
(function () {
  "use strict";

  var PUB_LIMIT = 8; // entries visible before "Show full list"

  // Adds a small counter to the tab button that opens `pane`
  function addCount(pane, n) {
    var tab = document.getElementById(pane.getAttribute("aria-labelledby"));
    if (!tab || tab.querySelector(".tab-count")) return;
    var badge = document.createElement("span");
    badge.className = "tab-count";
    badge.textContent = n;
    tab.appendChild(badge);
  }

  // ---- Publication: counters + short list with "Show full list" ----
  document.querySelectorAll(".publication .tab-pane").forEach(function (pane) {
    var entries = Array.prototype.filter.call(pane.children, function (el) {
      return el.tagName === "P";
    });
    addCount(pane, entries.length);
    if (entries.length <= PUB_LIMIT) return;

    entries.slice(PUB_LIMIT).forEach(function (el) { el.classList.add("pub-extra"); });

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pub-toggle";
    var closedLabel = "Show full list (" + entries.length + ")";
    btn.textContent = closedLabel;
    btn.setAttribute("aria-expanded", "false");

    btn.addEventListener("click", function () {
      var open = pane.classList.toggle("pub-open");
      btn.textContent = open ? "Show less" : closedLabel;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (!open) pane.scrollIntoView({ block: "start" });
    });

    pane.appendChild(btn);
  });

  // ---- Supervision: counters ----
  document.querySelectorAll(".students .tab-pane").forEach(function (pane) {
    addCount(pane, pane.querySelectorAll(".student-card").length);
  });
})();
