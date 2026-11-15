/**
 * layout.js — shared sidebar (profile + menu) for every page.
 *
 * Edit the menu or the profile block HERE ONCE and all pages update.
 * Each page loads this file as the first thing inside <body>.
 */
(function () {
  "use strict";

  // ---- Menu: [file, hash, icon, label] -------------------------------
  var MENU = [
    ["index.html",        "",       "bx bx-home",           "Home/ホーム"],
    ["news.html",         "",       "bx bx-news",           "News/ニュース"],
    ["teaching.html",     "",       "bx bxs-graduation",    "Teaching/教育"],
    ["supervision.html",  "",       "bx bx-group",          "Supervision/学生指導"],
    ["research.html",     "",       "bx bx-book-content",   "Research/研究"],
    ["publications.html", "",       "bx bxs-book",          "Publication/業績リスト"],
    ["services.html",     "",       "bx bxs-bookmark",      "Service/サービス"],
    ["awards.html",       "",       "bx bxs-award",         "Awards/賞"],
    ["contact.html",      "",       "bx bx-envelope",       "Contact/接触"]
  ];

  // Current file name ("" or "/" counts as index.html)
  var current = window.location.pathname.split("/").pop() || "index.html";

  var items = MENU.map(function (m) {
    var file = m[0], hash = m[1], icon = m[2], label = m[3];
    var cls = "nav-link";
    // In-page links on the home page scroll smoothly (handled by main.js)
    if (hash) cls += " scrollto";
    // Highlight the menu entry of the page being viewed
    if (!hash && file === current) cls += " active";
    return '<li><a href="' + file + hash + '" class="' + cls + '">' +
           '<i class="' + icon + '"></i> <span>' + label + "</span></a></li>";
  }).join("\n          ");

  var html =
    '<i class="bi bi-list mobile-nav-toggle d-xl-none"></i>\n' +
    '<header id="header">\n' +
    '  <div class="d-flex flex-column">\n' +
    '    <div class="profile">\n' +
    '      <img src="assets/img/profile-img.jpeg" alt="" class="img-fluid rounded-circle">\n' +
    '      <h1 class="text-light"><a href="index.html">LE Doan Hoang</a></h1>\n' +
    '      <p class="profile-title text-center"><a href="index.html">Associate Professor/准教授<br>University of Aizu/会津大学</a></p>\n' +
    '      <div class="social-links mt-3 text-center">\n' +
    '        <a href="https://u-aizu.ac.jp/research/faculty/detail?cd=90154&lng=en" class="school"><i class="bx bxs-school"></i></a>\n' +
    '        <a href="https://scholar.google.com/citations?user=3_oH7I4AAAAJ&hl=en" class="google"><i class="bx bxl-google"></i></a>\n' +
    '        <a href="https://www.researchgate.net/profile/Hoang-Le-46" class="book"><i class="bx bx-book"></i></a>\n' +
    '        <a href="https://researchmap.jp/hoangle" class="send"><i class="bx bxs-send"></i></a>\n' +
    '        <a href="https://www.linkedin.com/in/hoang-le-6600421aa/" class="linkedin"><i class="bx bxl-linkedin"></i></a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <nav id="navbar" class="nav-menu navbar">\n' +
    '      <ul>\n          ' + items + '\n      </ul>\n' +
    '    </nav>\n' +
    '  </div>\n' +
    '</header>\n' +
    '<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>\n';

  document.currentScript.insertAdjacentHTML("beforebegin", html);
})();
