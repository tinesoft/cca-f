/* Renders the exam-coverage widget from an inline <div data-coverage> block:
   how much of a topic's documented breadth (per official Anthropic/MCP docs)
   is actually tested by the exam, plus links to the related docs that aren't. */
(function () {
  "use strict";

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var block = document.querySelector("[data-coverage]");
    var mount = document.getElementById("coverage-mount");
    if (!block || !mount) return;

    var topic = block.getAttribute("data-topic");
    var task = block.getAttribute("data-task");
    var subtopics = Array.prototype.map.call(
      block.querySelectorAll("[data-subtopic]"),
      function (el) {
        return {
          name: el.getAttribute("data-name"),
          href: el.getAttribute("data-href"),
          inScope: el.getAttribute("data-in-scope") === "true",
        };
      }
    );

    var inScope = subtopics.filter(function (s) { return s.inScope; });
    var outScope = subtopics.filter(function (s) { return !s.inScope; });
    var pct = Math.round((inScope.length / subtopics.length) * 100);

    mount.innerHTML =
      '<section class="coverage callout accent">' +
        '<div class="callout-title">Exam Coverage</div>' +
        '<div class="coverage-row">' +
          '<div class="coverage-figure">' + pct + '<span>%</span></div>' +
          '<div class="coverage-body">' +
            '<div class="coverage-bar"><div class="coverage-bar-fill" style="width:' + pct + '%"></div></div>' +
            '<p>' + inScope.length + ' of ' + subtopics.length + ' subtopics documented for <strong>' + esc(topic) + '</strong> are tested by Task ' + task + '.</p>' +
          '</div>' +
        '</div>' +
        (outScope.length
          ? '<details class="coverage-details">' +
              '<summary>' + outScope.length + ' related topic' + (outScope.length === 1 ? "" : "s") + ' not on the exam</summary>' +
              '<ul>' +
                outScope.map(function (s) {
                  return '<li><a href="' + s.href + '" target="_blank" rel="noopener">' + esc(s.name) + '</a></li>';
                }).join("") +
              '</ul>' +
            '</details>'
          : "") +
      '</section>';
  });
})();
