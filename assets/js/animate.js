function animateScroll(container) {
  let animateCont = document.querySelectorAll(".animate");
  let animateCont2 = document.querySelectorAll(".animate2");
  let scrollCont = document.querySelector(container);

  scrollCont.addEventListener("scroll", triggerAnimate2);
  scrollCont.addEventListener("scroll", triggerAnimate);

  function triggerAnimate() {
    for (i = 0; i < animateCont.length; i++) {
      elmTop = animateCont[i].getBoundingClientRect().top;
      if (scrollCont.scrollTop + 380 > elmTop) {
        animateCont[i].classList.add("fade-up");
      } else {
        animateCont[i].classList.remove("fade-up");
      }
    }
  }
  function triggerAnimate2() {
    for (i = 0; i < animateCont2.length; i++) {
      elmTop = animateCont2[i].getBoundingClientRect().top;
      if (scrollCont.scrollTop + 380 > elmTop) {
        animateCont2[i].classList.add("fade-left");
      } else {
        animateCont2[i].classList.remove("fade-left");
      }
    }
  }
}
animateScroll("#container1");
animateScroll("#container2");

let animateCont = document.querySelectorAll(".animate")[0];

var strt = setTimeout(function () {
  animateCont.classList.add("fade-up");
}, 1000);

// animate rocket

function animateRocket(elemList) {
  var rocketCont = document.querySelectorAll(elemList);

  var frame = 0;
  var frameList = ["/static/img/rocket.png", "/static/img/rocket2.png"];

  var animationRocket = setInterval(function () {
    for (i = 0; i < rocketCont.length; i++) {
      if (frame < 2) {
        rocketCont[i].setAttribute("src", frameList[frame]);
        frame++;
      } else {
        frame = 0;
      }
    }
  }, 50);
}

animateRocket(".animateImg");
