/**
 * custom.js — small extras for the split pages.
 *
 * Publication page: each tab shows only the newest entries; a button under the
 * list opens the full list. Change PUB_LIMIT to show more or fewer by default.
 */
(function () {
  "use strict";

  var PUB_LIMIT = 8; // entries visible before "Show full list"

  document.querySelectorAll(".publication .tab-pane").forEach(function (pane) {
    var entries = Array.prototype.filter.call(pane.children, function (el) {
      return el.tagName === "P";
    });
    if (entries.length <= PUB_LIMIT) return;

    var extra = entries.slice(PUB_LIMIT);
    extra.forEach(function (el) { el.classList.add("pub-extra"); });

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
})();
