// for header
window.addEventListener("scroll", function () {
  let header = document.querySelector(".stickyHeader ");

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// for mobile view toogle

let hamburg = document.querySelector(".hamburger");
let navList = document.querySelector(".navItems");

function showNavList(){
  navList.classList.toggle("active");
}

hamburg.addEventListener("click", showNavList);

// for popup form

let clickButton = document.querySelectorAll(".clickForm");
let closeBtn = document.querySelector(".closePopUp");
let popupForm = document.querySelector(".popUp");
function showForm() {
  popupForm.classList.toggle("show");
}
clickButton.forEach((button) => {
  button.addEventListener("click", showForm);
});
closeBtn.addEventListener("click", () => {
  popupForm.classList.remove("show");
});

// for carousal
let images = ["assete/slide1.jpg", "assete/slide3.jpg", "assete/slide4.jpg"];
let slideIndex = 0;
let header = document.querySelector("header");
function backgroundSlide() {

    header.style.backgroundImage = `linear-gradient(to right, rgba(3, 112, 203, 0.9), rgba(3, 112, 203, 0)), url("${images[slideIndex]}")`;
     slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
}

backgroundSlide();

setInterval(backgroundSlide, 3000);

