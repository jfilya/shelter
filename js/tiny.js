

var doc = document,
slideList = doc.querySelectorAll(".slider-container > div"),
pageNavContainer = doc.querySelector(".nav"),
pageNav = doc.querySelector(".nav ul"),
toggleHandle = doc.querySelector(".nav-toggle-handle"),
divider = window.innerHeight / 2,
scrollTimer,
resizeTimer;


if (window.addEventListener) {
window.addEventListener("scroll", function () {
  clearTimeout(scrollTimer);

  scrollTimer = setTimeout(function () {
    [].forEach.call(slideList, function (el) {
      var rect = el.getBoundingClientRect(),
        navLink = pageNav.querySelector('[href="#' + el.id + '"]');
      if (rect.top <= divider && rect.bottom > divider) {
        if (navLink.className !== "active") {
          navLink.className = "active";
        }
      } else {
        if (navLink.className !== "") {
          navLink.className = "";
        }
      }
    });
  }, 100);
});

window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(function () {
    divider = window.innerHeight / 2;
  }, 100);
});


}

var mobile = "false",
isTestPage = false,
isDemoPage = true,
classIn = "jello",
classOut = "rollOut",
speed = 400,
doc = document,
win = window,
ww =
  win.innerWidth ||
  doc.documentElement.clientWidth ||
  doc.body.clientWidth,
fw = getFW(ww),
initFns = {},
sliders = new Object(),
edgepadding = 50,
gutter = 10;

function getFW(width) {
var sm = 400,
  md = 900,
  lg = 1400;
return width < sm
  ? 150
  : width >= sm && width < md
  ? 200
  : width >= md && width < lg
  ? 300
  : 400;
}
window.addEventListener("resize", function () {
fw = getFW(ww);
});