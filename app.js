`use strict`;

// styling the ntoificatrion icon in the nav bar
const notificationIcon = document.querySelector(".notify-button");
const notificationDiv = document.querySelector(".drop-down1");

notificationIcon.addEventListener("click", () => {
  notificationDiv.classList.toggle("display");
});

// styling the profile icon in the nav bar
const profileIcon = document.querySelector(".nametag");
const profileDiv = document.querySelector(".drop-down2");

profileIcon.addEventListener("click", () => {
  profileDiv.classList.toggle("display");
});

// Toggling off the call to action div in the main body
const extendIcon = document.querySelector(".extend-icon");
const extendDiv = document.querySelector(".extend");

extendIcon.addEventListener("click", () => {
  extendDiv.classList.add("display");
});

// styling the setup guide arrows
const setupIconUp = document.querySelector(".setup-arrow-up");
const setupIconDown = document.querySelector(".setup-arrow-down");
const mainSection = document.querySelector(".main-section");

setupIconDown.addEventListener("click", () => {
  mainSection.classList.remove("display");
  setupIconDown.classList.add("display");
  setupIconUp.classList.remove("display");
});

setupIconUp.addEventListener("click", () => {
  mainSection.classList.add("display");
  setupIconDown.classList.remove("display");
  setupIconUp.classList.add("display");
});

// Targeting all the options

const options = document.querySelectorAll(".option");
const buttonsInclude = document.querySelectorAll(".button-included");
const imagesDisplay = document.querySelectorAll(".img-display");
const pHeadFocus = document.querySelectorAll(".p-head");

options[0].addEventListener("click", () => {
  buttonsInclude[1].classList.add("display");
  buttonsInclude[0].classList.remove("display");
  buttonsInclude[2].classList.add("display");
  buttonsInclude[3].classList.add("display");
  buttonsInclude[4].classList.add("display");
  imagesDisplay[1].classList.add("display");
  imagesDisplay[0].classList.remove("display");
  imagesDisplay[2].classList.add("display");
  imagesDisplay[3].classList.add("display");
  imagesDisplay[4].classList.add("display");
  pHeadFocus[0].classList.add("focus");
  pHeadFocus[1].classList.remove("focus");
  pHeadFocus[2].classList.remove("focus");
  pHeadFocus[3].classList.remove("focus");
  pHeadFocus[4].classList.remove("focus");
});

options[1].addEventListener("click", () => {
  buttonsInclude[1].classList.remove("display");
  buttonsInclude[0].classList.add("display");
  buttonsInclude[2].classList.add("display");
  buttonsInclude[3].classList.add("display");
  buttonsInclude[4].classList.add("display");
  imagesDisplay[1].classList.remove("display");
  imagesDisplay[0].classList.add("display");
  imagesDisplay[2].classList.add("display");
  imagesDisplay[3].classList.add("display");
  imagesDisplay[4].classList.add("display");
  pHeadFocus[0].classList.remove("focus");
  pHeadFocus[1].classList.add("focus");
  pHeadFocus[2].classList.remove("focus");
  pHeadFocus[3].classList.remove("focus");
  pHeadFocus[4].classList.remove("focus");
});

options[2].addEventListener("click", () => {
  buttonsInclude[1].classList.add("display");
  buttonsInclude[0].classList.add("display");
  buttonsInclude[2].classList.remove("display");
  buttonsInclude[3].classList.add("display");
  buttonsInclude[4].classList.add("display");
  imagesDisplay[1].classList.add("display");
  imagesDisplay[0].classList.add("display");
  imagesDisplay[2].classList.remove("display");
  imagesDisplay[3].classList.add("display");
  imagesDisplay[4].classList.add("display");
  pHeadFocus[0].classList.remove("focus");
  pHeadFocus[1].classList.remove("focus");
  pHeadFocus[2].classList.add("focus");
  pHeadFocus[3].classList.remove("focus");
  pHeadFocus[4].classList.remove("focus");
});

options[3].addEventListener("click", () => {
  buttonsInclude[1].classList.add("display");
  buttonsInclude[0].classList.add("display");
  buttonsInclude[2].classList.add("display");
  buttonsInclude[3].classList.remove("display");
  buttonsInclude[4].classList.add("display");
  imagesDisplay[1].classList.add("display");
  imagesDisplay[0].classList.add("display");
  imagesDisplay[2].classList.add("display");
  imagesDisplay[3].classList.remove("display");
  imagesDisplay[4].classList.add("display");
  pHeadFocus[0].classList.remove("focus");
  pHeadFocus[1].classList.remove("focus");
  pHeadFocus[2].classList.remove("focus");
  pHeadFocus[3].classList.add("focus");
  pHeadFocus[4].classList.remove("focus");
});

options[4].addEventListener("click", () => {
  buttonsInclude[1].classList.add("display");
  buttonsInclude[0].classList.add("display");
  buttonsInclude[2].classList.add("display");
  buttonsInclude[3].classList.add("display");
  buttonsInclude[4].classList.remove("display");
  imagesDisplay[1].classList.add("display");
  imagesDisplay[0].classList.add("display");
  imagesDisplay[2].classList.add("display");
  imagesDisplay[3].classList.add("display");
  imagesDisplay[4].classList.remove("display");
  pHeadFocus[0].classList.remove("focus");
  pHeadFocus[1].classList.remove("focus");
  pHeadFocus[2].classList.remove("focus");
  pHeadFocus[3].classList.remove("focus");
  pHeadFocus[4].classList.add("focus");
});

// Targeting the checkboxes and progress bar

const checkboxes = document.querySelectorAll(".checkboxs");
const untickedCircle = document.querySelectorAll(".option-state");
const tickedCircle = document.querySelectorAll(".option-state-tick");
const progressBarDiv = document.querySelector(".progress-sub-div");
const progressNo = document.querySelector(".progress-number");

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    progressBarUpdate(index + 1);
  });
});

checkboxes[0].addEventListener("change", () => {
  if (checkboxes[0].checked) {
    buttonsInclude[1].classList.remove("display");
    imagesDisplay[1].classList.remove("display");
    buttonsInclude[0].classList.add("display");
    imagesDisplay[0].classList.add("display");
    pHeadFocus[0].classList.remove("focus");
    pHeadFocus[1].classList.add("focus");
    pHeadFocus[2].classList.remove("focus");
    pHeadFocus[3].classList.remove("focus");
    pHeadFocus[4].classList.remove("focus");
  }
});

checkboxes[1].addEventListener("change", () => {
  if (checkboxes[1].checked) {
    buttonsInclude[2].classList.remove("display");
    imagesDisplay[2].classList.remove("display");
    buttonsInclude[1].classList.add("display");
    imagesDisplay[1].classList.add("display");
    pHeadFocus[0].classList.remove("focus");
    pHeadFocus[1].classList.remove("focus");
    pHeadFocus[2].classList.add("focus");
    pHeadFocus[3].classList.remove("focus");
    pHeadFocus[4].classList.remove("focus");
  }
});

checkboxes[2].addEventListener("change", () => {
  if (checkboxes[2].checked) {
    buttonsInclude[3].classList.remove("display");
    imagesDisplay[3].classList.remove("display");
    buttonsInclude[2].classList.add("display");
    imagesDisplay[2].classList.add("display");
    pHeadFocus[0].classList.remove("focus");
    pHeadFocus[1].classList.remove("focus");
    pHeadFocus[2].classList.remove("focus");
    pHeadFocus[3].classList.add("focus");
    pHeadFocus[4].classList.remove("focus");
  }
});

checkboxes[3].addEventListener("change", () => {
  if (checkboxes[3].checked) {
    buttonsInclude[4].classList.remove("display");
    imagesDisplay[4].classList.remove("display");
    buttonsInclude[3].classList.add("display");
    imagesDisplay[3].classList.add("display");
    pHeadFocus[0].classList.remove("focus");
    pHeadFocus[1].classList.remove("focus");
    pHeadFocus[2].classList.remove("focus");
    pHeadFocus[3].classList.remove("focus");
    pHeadFocus[4].classList.add("focus");
  }
});

checkboxes[4].addEventListener("change", () => {
  if (checkboxes[4].checked) {
    buttonsInclude[4].classList.add("display");
    imagesDisplay[4].classList.add("display");
    pHeadFocus[4].classList.remove("focus");
  }
});

function progressBarUpdate() {
  let progressBar = 0;
  let progressBarIndex = 0;
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      progressBar += 20;
      progressBarIndex += 1;

      untickedCircle[index].classList.add("display");
      tickedCircle[index].classList.remove("display");
    } else {
      untickedCircle[index].classList.remove("display");
      tickedCircle[index].classList.add("display");
    }
  });

  progressBarDiv.style.width = `${progressBar}%`;
  progressNo.innerHTML = progressBarIndex;
}
