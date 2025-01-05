"use strict";

const body = document.querySelector("body");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const text = document.querySelector(".text");

const winSection = document.querySelector(".win");
const tieSection = document.querySelector(".tie");
const looseSection = document.querySelector(".loose");

// Computer choose a number
function generateValue() {
  let randomNumber = Number(Math.random().toFixed(2));
  let valueAI = "";
  if (randomNumber < 0.33) valueAI = "rock";
  if (0.33 <= randomNumber && randomNumber < 0.66) valueAI = "paper";
  if (0.66 <= randomNumber) valueAI = "scissor";

  return valueAI;
}

const score = {
  win: 0,
  tie: 0,
  loose: 0,
};

// play game function
function playGame(value) {
  const valueAI = generateValue();
  let result = "";
  text.classList.remove("hidden");

  if (value === "rock") {
    if (valueAI === value) {
      result = `Computer choose ${valueAI}; Tie`;
      score["tie"]++;
    } else if (valueAI !== value) {
      valueAI === "paper"
        ? (result = `Computer choose ${valueAI}; You loose`)
        : (result = `Computer choose ${valueAI}; You win`);

      valueAI === "paper" ? score["loose"]++ : score["win"]++;
    }
  }

  if (value === "paper") {
    if (valueAI === value) {
      result = `Computer choose ${valueAI}; Tie`;
      score["tie"]++;
    } else if (valueAI !== value) {
      valueAI === "rock"
        ? (result = `Computer choose ${valueAI}; You win`)
        : (result = `Computer choose ${valueAI}; You loose`);

      valueAI === "rock" ? score["win"]++ : score["loose"]++;
    }
  }

  if (value === "scissor") {
    if (valueAI === value) {
      result = `Computer choose ${valueAI}; Tie`;
      score["tie"]++;
    } else if (valueAI !== value) {
      valueAI === "rock"
        ? (result = `Computer choose ${valueAI}; You loose`)
        : (result = `Computer choose ${valueAI}; You win`);

      valueAI === "rock" ? score["loose"]++ : score["win"]++;
    }
  }

  if (result.includes("Tie")) {
    body.style.backgroundColor = "#deac23";
  } else if (result.includes("win")) {
    body.style.backgroundColor = "#29c718";
  } else if (result.includes("loose")) {
    body.style.backgroundColor = "#b31b1b";
  }

  text.innerHTML = result;

  winSection.textContent = score["win"];
  looseSection.textContent = score["loose"];
  tieSection.textContent = score["tie"];
}

// ROCK BTN
rockBtn.addEventListener("click", function () {
  playGame(rockBtn.value);
});

// PAPER BTN
paperBtn.addEventListener("click", function () {
  playGame(paperBtn.value);
});

// SCISSOR BTN
scissorBtn.addEventListener("click", function () {
  playGame(scissorBtn.value);
});
