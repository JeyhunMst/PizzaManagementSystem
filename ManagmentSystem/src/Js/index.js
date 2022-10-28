const imagesOnGalery = document.querySelectorAll(".gallery a");
const arrows = document.querySelectorAll(".fa-solid");
const newPopup = document.querySelector(".popup");
const sliderImg = document.querySelector(".slider img");
const newBtn = document.querySelector(".next");
const prev = document.querySelector(".prev");
const inner = document.querySelector(".inner");
let newElem;
imagesOnGalery.forEach((item) => {
  item.classList.add("showSlider");
  let imgSource = item.getAttribute("href");
  sliderImg.setAttribute("src", imgSource);
  newPopup.style.display = "flex";
  newPopup.classList.remove("d-none");
});

const next = function nextFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[0];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
};
setInterval(next, 2000);
newBtn.addEventListener("click", next);

prev.addEventListener("click", function (e) {
  arrowLeftFunction();
});

function arrowRightFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[0];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
}
function arrowLeftFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.previousElementSibling) {
    sliderShow.previousElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.previousElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[4].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[4];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    arrowRightFunction();
  } else if (e.key === "ArrowLeft") {
    arrowLeftFunction();
  }
});
