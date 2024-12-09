"use strict";

// Define variables
const player0 = document.querySelector("#player--0");
const player1 = document.querySelector("#player--1");
const addButton = document.querySelector(".add");
const standButton = document.querySelector(".stand");
const resetButton = document.querySelector(".reset");
const scoreHead = document.querySelector(".score__header");
const actualScore = document.querySelector(".actual--score");

let score = 0;
let scoreMain = 0;

addButton.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);

  if (randomNumber === 1) {
    // Change to next player
    console.log("Changed player");
  } else {
    score += randomNumber;
    actualScore.textContent = score;
  }
});

standButton.addEventListener("click", function () {
  // Adding the scorte to mainScore and change the text
  // content for scoreHead
  scoreMain += score;
  scoreHead.textContent = scoreMain;
  score = 0;
  actualScore.textContent = score;

  // Toggle the active player class
  player0.classList.toggle("active--player");
  player1.classList.toggle("active--player");
});
