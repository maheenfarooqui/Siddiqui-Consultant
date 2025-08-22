// for header
window.addEventListener("scroll", function () {
  let header = document.querySelector(".stickyHeader ");

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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

// for faqs section
// get var
let click1 = document.querySelector(".press1");
let answer1 = document.querySelector(".answer1");
let click2 = document.querySelector(".press2");
let answer2 = document.querySelector(".answer2");
let click3 = document.querySelector(".press3");
let answer3 = document.querySelector(".answer3");
let aerrow1 = document.querySelector(".aerrow1");
let aerrow2 = document.querySelector(".aerrow2");
let aerrow3 = document.querySelector(".aerrow3");

// write function
function showAnswer1() {
  answer1.classList.toggle("active");
  aerrow1.classList.toggle("rotate");
}
function showAnswer2() {
  answer2.classList.toggle("active");
  aerrow2.classList.toggle("rotate");
}
function showAnswer3() {
  answer3.classList.toggle("active");
  aerrow3.classList.toggle("rotate");
}

// add eventlistener
click1.addEventListener("click", showAnswer1);
click2.addEventListener("click", showAnswer2);
click3.addEventListener("click", showAnswer3);


//  slide for testimonals

let tSlide = document.querySelectorAll(".testimonalContent");
let index = 0 ;

function showTestimonal(){
  tSlide.forEach(slide => slide.classList.remove("active"));
  tSlide[index].classList.add("active");
  index++ ;
  if(index >= tSlide.length){
    index = 0;
  }
}

showTestimonal();
setInterval(showTestimonal, 3000);