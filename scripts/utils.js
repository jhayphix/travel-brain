// *** ------------SLIDE SHOW----------------- ***//
const showcaseSection = document.querySelector("#showcase-section");
let timeOut = 5000;
let slideIndex = 0;
let autoOn = true;

// ------ Auto Slides Show -------- //
autoSlides();
function autoSlides() {
  timeOut = timeOut - 20;

  if (autoOn == true && timeOut < 0) {
    showSlides();
  }
  setTimeout(autoSlides, 20);
}

// ------ Manual Slides Show ------- //
const slidesPrevBtn = showcaseSection.querySelector(".slideshow-prev-btn");
slidesPrevBtn.addEventListener("click", () => {
  prevSlide();
});

function prevSlide() {
  timeOut = 2000;

  let slides = document.getElementsByClassName("slides-img-container");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex--;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex == 0) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// ----- Next Slides ------- //
const slidesNextBtn = showcaseSection.querySelector(".slideshow-next-btn");
slidesNextBtn.addEventListener("click", () => {
  showSlides();
});

function showSlides() {
  timeOut = 2000;

  let slides = document.getElementsByClassName("slides-img-container");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// *** ------------- END OF SLIDE SHOW ---------------- *** //

// NAVBAR CATEGORY
const navCategory = document.querySelector("#nav-category");
navCategory.addEventListener("click", () => {
  const navCatContainer = document.querySelector(".nav-categories-container");
  navCatContainer.classList.toggle("nav-cat-show");
  const caretDown = document.querySelector(".fa-caret-down");
  caretDown.classList.toggle("fa-caret-up");
});

// *** ------- NAVBAR APPEAR ---------- ***//
const navbarMenu = document.querySelector("#navbar-menu");
const navbarMenuLine = document.querySelectorAll(".navbar-menu-line");
const navLinksContainer = document.querySelector(".navbar-links-container");

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
  navbarMenuLine.forEach((line) => {
    line.classList.toggle("show");
  });
  navLinksContainer.classList.toggle("nav-display");
});

// JUMP TO TOP
const toTop = document.querySelector(".jump-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// END OF JUMP TO TOP
