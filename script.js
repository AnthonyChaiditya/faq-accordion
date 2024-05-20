const answerOne = document.getElementById("answer-one");
const answerTwo = document.getElementById("answer-two");
const answerThree = document.getElementById("answer-three");
const answerFour = document.getElementById("answer-four");



const plusButtonImage = ''


// grab all of my buttons from the HTML page

const buttonOne = document.getElementById("button-one");
const buttonTwo = document.getElementById("button-two");
const buttonThree = document.getElementById("button-three");
const buttonFour = document.getElementById("button-four");
console.log(buttonOne.innerHTML)

buttonOne.addEventListener("click", () => {
  // if the display is there -> make it disappear, and make sure the button shows to '+'
  if (answerOne.style.display !== "none") {
    answerOne.style.display = "none";
    buttonOne.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">';
  } else {
    answerOne.style.display = "flex";
    buttonOne.innerHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">';
  }
})

buttonTwo.addEventListener("click", () => {
  // if the display is there -> make it disappear, and make sure the button shows to '+'
  if (answerTwo.style.display !== "none") {
    answerTwo.style.display = "none";
    buttonTwo.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">';
  } else {
    answerTwo.style.display = "flex";
    buttonTwo.innerHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">';
  }
})

buttonThree.addEventListener("click", () => {
  // if the display is there -> make it disappear, and make sure the button shows to '+'
  if (answerThree.style.display !== "none") {
    answerThree.style.display = "none";
    buttonThree.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">';
  } else {
    answerThree.style.display = "flex";
    buttonThree.innerHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">';
  }
})

buttonFour.addEventListener("click", () => {
  // if the display is there -> make it disappear, and make sure the button shows to '+'
  if (answerFour.style.display !== "none") {
    answerFour.style.display = "none";
    buttonFour.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">';
  } else {
    answerFour.style.display = "flex";
    buttonFour.innerHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">';
  }
})