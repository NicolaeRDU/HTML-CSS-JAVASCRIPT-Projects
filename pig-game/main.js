"use strict";

// Define variables
const player0 = document.querySelector("#player--0");
const player1 = document.querySelector("#player--1");

const addButton = document.querySelector(".add");
const standButton = document.querySelector(".stand");
const resetButton = document.querySelector(".reset");
const dice = document.querySelector(".dice");

const scoreHead0 = document.querySelector("#player--0 .score__header");
const scoreHead1 = document.querySelector("#player--1 .score__header");
const actualScore0 = document.querySelector("#player--0 .actual--score");
const actualScore1 = document.querySelector("#player--1 .actual--score");

const gameContainer = document.querySelector(".container");
const rulesContainer = document.querySelector(".rules__container");
const playGame = document.querySelector(".play--game");

let score = [0, 0];
let mainScore = [0, 0];
let active = 0;
let playing = true;

// PLAY Game
playGame.addEventListener("click", function () {
  rulesContainer.classList.add("animation");
  setTimeout(function () {
    rulesContainer.classList.add("hidden");
  }, 1800);
  setTimeout(function () {
    gameContainer.classList.remove("hidden");
  }, 2000);
});

const playerChange = function () {
  // Reset the score
  score = [0, 0];

  // Changing the active from 1 to 0 and 0 to 1
  active === 0 ? (active = 1) : (active = 0);
  actualScore0.textContent = 0;
  actualScore1.textContent = 0;

  // Toggle the active player class
  player0.classList.toggle("active--player");
  player1.classList.toggle("active--player");

  if (!playing) {
    player0.classList.remove("active--player");
    player1.classList.remove("active--player");
  }
};

// ADD BTN
addButton.addEventListener("click", function () {
  if (playing) {
    // Generate a random number when you press the ADD button
    let randomNumber = Math.trunc(Math.random() * 6 + 1);

    // Display the dice and change it automatically
    dice.classList.remove("hidden");
    dice.src = `images/dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      score[active] += randomNumber;

      active === 0
        ? (actualScore0.textContent = score[active])
        : (actualScore1.textContent = score[active]);
    } else {
      playerChange();
    }
  }
});

// STAND BTN
standButton.addEventListener("click", function () {
  if (playing) {
    if (mainScore[active] < 30) {
      // Add the score to the mainScore
      mainScore[active] += score[active];

      active === 0
        ? (scoreHead0.textContent = mainScore[active])
        : (scoreHead1.textContent = mainScore[active]);
    }

    if (mainScore[active] >= 30 && active === 0) {
      player0.classList.add("winner");
      playing = false;
    }

    if (mainScore[active] >= 30 && active === 1) {
      player1.classList.add("winner");
      playing = false;
    }

    playerChange();
  }
});

// RESET Btn
resetButton.addEventListener("click", function () {
  score = [0, 0];
  mainScore = [0, 0];
  active = 0;
  playing = true;

  dice.classList.add("hidden");

  player0.classList.remove("winner");
  player1.classList.remove("winner");

  player0.classList.add("active--player");
  player1.classList.remove("active--player");

  scoreHead0.textContent =
    scoreHead1.textContent =
    actualScore0.textContent =
    actualScore1.textContent =
      0;
});
