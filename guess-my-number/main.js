"use strict";

// Selectors
const showNumber = document.querySelector(".show--number");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const text = document.querySelector(".text");
const highscoreEl = document.querySelector(".highscore");
const btnSubmit = document.querySelector(".submit");
const btnReset = document.querySelector(".reset");

//////////////////////////
// Logics
// s = score
let s = 20;
let highscore = 0;

// Generate the random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);
number.value = "";
let playing = true;

const setLoose = function (score) {
  if (score === 0) {
    playing = false;
    text.textContent = "You loose 😢";
  }
};

const asignHighscore = function (highscore) {
  if (highscore < s) {
    highscore = s;
    highscoreEl.textContent = s > highscore ? s : highscore;
  }
};

btnSubmit.addEventListener("click", () => {
  const yourChoise = Number(number.value);

  if (playing) {
    if (yourChoise) {
      if (yourChoise !== randomNumber) {
        text.classList.remove("hidden");
        text.textContent =
          yourChoise > randomNumber ? "Too high 👆" : "Too low 👇";
        s--;
        score.textContent = s;
        setLoose(s);
      }
      if (yourChoise === randomNumber) {
        // Display the text
        text.classList.remove("hidden");
        text.textContent = "Correct";

        // Showing the secret number and set playing to false
        showNumber.textContent = randomNumber;
        playing = false;

        // Asign the score to highscore, if it is the case
        asignHighscore(highscore);

        // Clear the input
        number.value = "";
      }
    } else if (!yourChoise) {
      text.classList.remove("hidden");
      text.textContent = "⛔ Not a number";
    }
  }
});

btnReset.addEventListener("click", () => {
  s = 20;
  score.textContent = s;
  text.classList.add("hidden");
  number.value = "";
  playing = true;
  showNumber.textContent = "?";
  randomNumber = Math.trunc(Math.random() * 20 + 1);
});
