"use strict";

// Define variables
const player0 = document.querySelector("#player--0");
const player1 = document.querySelector("#player--1");
const addButton = document.querySelector(".add");
const standButton = document.querySelector(".stand");
const resetButton = document.querySelector(".reset");
const scoreHead0 = document.querySelector("#player--0 .score__header");
const scoreHead1 = document.querySelector("#player--1 .score__header");
const actualScore0 = document.querySelector("#player--0 .actual--score");
const actualScore1 = document.querySelector("#player--1 .actual--score");

let score = [0, 0];
let mainScore = [0, 0];
let active = 0;
let playing = true;

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

    if (randomNumber !== 1) {
      score[active] += randomNumber;
      if (active === 0) actualScore0.textContent = score[active];
      if (active === 1) actualScore1.textContent = score[active];
    } else {
      playerChange();
    }
  }
});

// STAND BTN
standButton.addEventListener("click", function () {
  if (playing) {
    if (mainScore[active] < 20) {
      // Add the score to the mainScore
      mainScore[active] += score[active];

      active === 0
        ? (scoreHead0.textContent = mainScore[active])
        : (scoreHead1.textContent = mainScore[active]);
    }

    if (mainScore[active] >= 20 && active === 0) {
      player0.classList.add("winner");
      playing = false;
    }

    if (mainScore[active] >= 20 && active === 1) {
      player1.classList.add("winner");
      playing = false;
    }

    playerChange();
  }
});
