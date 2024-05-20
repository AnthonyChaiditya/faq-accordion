const answerOne = document.getElementById("answer-one");
console.log(answerOne.style)


const plusButtonImage = ''


// grab all of my buttons from the HTML page

const buttonOne = document.getElementById("button-one");
const buttonTwo = document.getElementById("button-two");
const buttonThree = document.getElementById("button-three");
const buttonFour = document.getElementById("button-four");
console.log(buttonOne.innerHTML)

buttonOne.addEventListener("click", (event) => {
  // if the display is there -> make it disappear, and make sure the button shows to '+'
  if (answerOne.style.display === "flex") {
    answerOne.style.display === "none";
    buttonOne.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">';
  } 

  // if the display is not there -> make it appear, and make sure the button shows to 'e
  if (buttonOne.style.display === "none") {
    buttonOne.style.display === "flex";
    buttonOne.innterHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">';
  }

})