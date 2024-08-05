// =============== side nav =============== //

let openMenu = document.querySelector(".navbar-toggle");
let sideMenu = document.querySelector(".menu");
let closeMenu = document.querySelector(".navbar-close");

openMenu.addEventListener("click", function () {
  sideMenu.style.left = "0%";
});

closeMenu.addEventListener("click", function () {
  sideMenu.style.left = "-100%";
});

// =============== mega menu =============== //

let openMegaMenu = document.querySelector(".openMega");
let ourMegaMenu = document.querySelector(".megaList");
let closeMegaMenu = document.querySelector(".closeMenu");

openMegaMenu.addEventListener("click", function () {
  ourMegaMenu.style.left = "0%";
});

closeMegaMenu.addEventListener("click", function () {
  ourMegaMenu.style.left = "-100%";
});

// =============== counter =============== //

$(document).ready(function () {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 0);
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

// =============Testimonials==============

$(".opinion-slider").slick({
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 300,
});

// =============Other==============

new WOW().init();
