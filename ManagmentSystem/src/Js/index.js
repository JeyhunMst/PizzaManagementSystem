const imagesOnGalery = document.querySelectorAll("#slider-section .gallery a");
const arrows = document.querySelectorAll("#slider-section .fa-solid");
const slider = document.querySelector("#slider-section .slider");
const sliderImg = document.querySelector("#slider-section .slider img");
const newBtn = document.querySelector("#slider-section .next");
const prev = document.querySelector("#slider-section .prev");
const inner = document.querySelector("#slider-section .inner");
let newElem;
imagesOnGalery.forEach((item) => {
  item.classList.add("showSlider");
  let imgSource = item.getAttribute("href");
  sliderImg.setAttribute("src", imgSource);
  slider.style.display = "flex";
  slider.classList.remove("d-none");
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
// ----------------------------------------------------------------------------------------
const form = document.querySelector("#order-register .row form");
const nameInput = document.querySelector("#order-register .name-of-user");
const nameError = document.querySelector("#order-register .name-error");
const numberInput = document.querySelector("#order-register .number-of-user");
const numberError = document.querySelector("#order-register .number-error");
const addressInput = document.querySelector("#order-register .address-of-user");
const addressError = document.querySelector("#order-register .address-error");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const orderBtn = document.querySelector("#order-register .order-pizza");

orderBtn.addEventListener("click", (e) => {
  let nameInputCondition = false;
  let numberInputCondition = false;
  let addressInputCondition = false;
  if (nameInput.value.trim().length === 0) {
    nameError.innerHTML = "<i>Empty input name* <i>";
    nameError.style.color = "red";
  } else {
    nameError.innerHTML = "<i>Correct* <i>";
    nameError.style.color = "green";
    nameInputCondition = true;
  }
  if (numberInput.value.trim().length === 0) {
    numberError.innerHTML = "<i>Empty input phone number* <i>";
    numberError.style.color = "red";
  } else if (!Number(numberInput.value.trim())) {
    numberError.innerHTML = "<i>Input should be consists only digits!* <i>";
    numberError.style.color = "red";
  } else if (numberInput.value.trim().length !== 7) {
    numberError.innerHTML =
      "<i>Number length should equals 8! For eaxmaple:2671717* <i>";
    numberError.style.color = "red";
  } else {
    numberError.innerHTML = "<i>Correct* <i>";
    numberError.style.color = "green";
    numberInputCondition = true;
  }
  if (addressInput.value.trim().length === 0) {
    addressError.innerHTML = "<i>Empty input full-address* <i>";
    addressError.style.color = "red";
  } else {
    addressError.innerHTML = "<i>Correct* <i>";
    addressError.style.color = "green";
    addressInputCondition = true;
  }

  if (nameInputCondition && numberInputCondition && addressInputCondition) {
  }
});

// function numberChecker(number) {
//   for (let i = 0; i < 1; i++) {
//     if (number[i] < 47 && number[i] > 57) {
//       console.log(number[i]);
//       return false;
//     }
//   }
//   return true;
// }
