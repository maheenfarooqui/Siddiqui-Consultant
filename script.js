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

//  for counter section

function startCount(element, target, suffix) {
  let count = 0;
  let duration = 2000;
  let step = Math.ceil(target / (duration / 20));
  let countInterval = setInterval(() => {
    count += step;
    element.textContent = count + suffix;

    if (count >= target) {
      clearInterval(countInterval);
    }
  }, 20);
}

let started = false;

window.addEventListener("scroll", function () {
  let counterSection = document.querySelector(".counter");
  let position = counterSection.getBoundingClientRect().top;
  let screenHeight = this.window.innerHeight;

  if (position < screenHeight && !started) {
    startCount(document.querySelector("#counter1"), 200, "+");
    startCount(document.querySelector("#counter2"), 97, "%");
    startCount(document.querySelector("#counter3"), 5628, "+");
    startCount(document.querySelector("#counter4"), 5637, "+");
    started = true;
  }
});
