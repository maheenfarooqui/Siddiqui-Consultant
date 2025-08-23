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
