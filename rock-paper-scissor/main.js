"use strict";

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const text = document.querySelector(".text");

// Computer choose a number
const generateValue = function () {
  let randomNumber = Number(Math.random().toFixed(2));
  let valueAI = "";
  if (randomNumber < 0.33) valueAI = "rock";
  if (0.33 <= randomNumber && randomNumber < 0.66) valueAI = "paper";
  if (0.66 <= randomNumber) valueAI = "scissor";

  return valueAI;
};

// ROCK BTN
rockBtn.addEventListener("click", function () {
  text.classList.remove("hidden");

  const valueAI = generateValue();
  const valuePlayer = rockBtn.value;

  if (valueAI === "rock") console.log("Tie");
  if (valueAI === "paper") console.log("You loose");
  if (valueAI === "scissor") console.log("You win");
});

// PAPER BTN
paperBtn.addEventListener("click", function () {
  const valueAI = generateValue();
  let result = "";
  text.classList.remove("hidden");

  if (valueAI === "rock") result = `Computer choose ${valueAI}; You win`;
  if (valueAI === "paper") result = `Computer choose ${valueAI}; Tie`;
  if (valueAI === "scissor") result = `Computer choose ${valueAI}; You loose`;

  text.innerHTML = result;
});

// SCISSOR BTN
scissorBtn.addEventListener("click", function () {
  text.classList.remove("hidden");
  let valuePlayer = scissorBtn.value;
  const valueAI = generateValue();

  if (valueAI === "rock") console.log("You loose");
  if (valueAI === "paper") console.log("You win");
  if (valueAI === "scissor") console.log("Tie");
});
