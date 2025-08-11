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
function showForm(){
    popupForm.classList.toggle("show");

}
clickButton.forEach(button =>{
    button.addEventListener("click", showForm);

});
closeBtn.addEventListener("click", () => {
    popupForm.classList.remove("show");
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
function showAnswer1(){
    answer1.classList.toggle("active");
    aerrow1.classList.toggle("rotate");
}
function showAnswer2(){
    answer2.classList.toggle("active");
    aerrow2.classList.toggle("rotate");
}
function showAnswer3(){
    answer3.classList.toggle("active");
    aerrow3.classList.toggle("rotate");
}

// add eventlistener
click1.addEventListener("click" , showAnswer1);
click2.addEventListener("click" , showAnswer2);
click3.addEventListener("click" , showAnswer3);