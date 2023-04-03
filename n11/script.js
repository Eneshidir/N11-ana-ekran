/////////////////////////SLIDE PHOTOS/////////////////////

const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;
const nextSlide = () => {
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");
  //////////////////FOR BUTTONS//////////////////////
  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add("active");
  } else {
    slides[0].classList.add("active");
  }
};
const prevSlide = () => {
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");

  if (activeSlide.previousElementSibling) {
    activeSlide.previousElementSibling.classList.add("active");
  } else {
    slides[slides.length - 1].classList.add("active");
  }
};

next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", () => {
  prevSlide();
});
///////////////////////////////AUTO////////////////////////////
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
///////////////////////////////////////////////////////////////////////////////
///Devamını Göster////////
let ackapa = document.getElementsByClassName("continue");
const devam = document.getElementById("devam");
function hideShow() {
  for (let i = 0; i < ackapa.length; i++) {
    if (ackapa[i].style.display == "none") {
      ackapa[i].style.display = "block";
      devam.innerHTML = "Devamını Gizle";
      devam.style.textDecoration = "underline";
    } else {
      ackapa[i].style.display = "none";
      devam.innerHTML = "Devamını Göster";
      devam.style.textDecoration = "underline";
    }
  }
}
devam.addEventListener("click", () => {
  hideShow();
});
///////scrollbar//////
const searchbar = document.querySelector(".container1");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    searchbar.classList.add("container1-scrolled");
  } else if (window.scrollY <= 50) {
    searchbar.classList.remove("container1-scrolled");
  }
});
