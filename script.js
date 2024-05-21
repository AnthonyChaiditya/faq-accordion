// SOLUTION 1: BRUTE FORCE -----------------------------------------------

// const answerOne = document.getElementById("answer-one");
// const answerTwo = document.getElementById("answer-two");
// const answerThree = document.getElementById("answer-three");
// const answerFour = document.getElementById("answer-four");

// // grab all of my buttons from the HTML page

// const buttonOne = document.getElementById("button-one");
// const buttonTwo = document.getElementById("button-two");
// const buttonThree = document.getElementById("button-three");
// const buttonFour = document.getElementById("button-four");
// console.log(buttonOne.innerHTML)

// buttonOne.addEventListener("click", () => {
//   // if the display is there -> make it disappear, and make sure the button shows to '+'
//   buttonOne.addEventListener("click", () => {
//     answerOne.classList.toggle("visible");
//     buttonOne.innerHTML = answerOne.classList.contains("visible")
//       ? '<img src="/assets/images/icon-minus.svg" alt="button-img">'
//       : '<img src="/assets/images/icon-plus.svg" alt="button-img">';
//   });
// })

// buttonTwo.addEventListener("click", () => {
//   // if the display is there -> make it disappear, and make sure the button shows to '+'
//   if (answerTwo.style.display !== "none") {
//     answerTwo.style.display = "none";
//     buttonTwo.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">';
//   } else {
//     answerTwo.style.display = "flex";
//     buttonTwo.innerHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">';
//   }
// })

// buttonThree.addEventListener("click", () => {
//   // if the display is there -> make it disappear, and make sure the button shows to '+'
//   if (answerThree.style.display !== "none") {
//     answerThree.style.display = "none";
//     buttonThree.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">';
//   } else {
//     answerThree.style.display = "flex";
//     buttonThree.innerHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">';
//   }
// })

// buttonFour.addEventListener("click", () => {
//   // if the display is there -> make it disappear, and make sure the button shows to '+'
//   if (answerFour.style.display !== "none") {
//     answerFour.style.display = "none";
//     buttonFour.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">';
//   } else {
//     answerFour.style.display = "flex";
//     buttonFour.innerHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">';
//   }
// })





// when any of the buttons are clicked, open up the corresponding answer associated with the button

// function showOrHideAnswer(index) {

//   let index = buttons.forEach(button => {
//     button.addEventListener('click', () => {
//       return
//     })
//   })
// }

// SOLUTION 2: Using forEach method and classList API -------------------------------------------

// const answers = document.querySelectorAll('.answer');
// const buttons = document.querySelectorAll('.button');

// buttons.forEach((button) => {
//   button.addEventListener('click', ()=> {
//     if (buttons[0] === button) {
//       if (answers[0].classList.contains('active')) {
//         answers[0].classList.remove('active')
//       } else {
//         answers[0].classList.add('active');
//       }
//     } 
//   })
// })

// would need to repeat this and add an event listener for each button

// SOLUTION 3: Using forEach method, classList API, and index parameter to make avoid having to repeat code for each button

const answers = document.querySelectorAll('.answer');
const buttons = document.querySelectorAll('.button');

// showing and hiding answers

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (buttons[index] === button) {
      answers[index].classList.toggle('active');
    }
  })
})

// changing the button icon

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button.innerHTML === '<img src="/assets/images/icon-plus.svg" alt="button-img">') {
      button.innerHTML = '<img src="/assets/images/icon-minus.svg" alt="button-img">'
    } else if (button.innerHTML === '<img src="/assets/images/icon-minus.svg" alt="button-img">') {
      button.innerHTML = '<img src="/assets/images/icon-plus.svg" alt="button-img">' 
    }
  })
})




