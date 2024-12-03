"use strict";

// Select the items
const openModalBtns = document.querySelectorAll(".btn__open--modal");
const closeModalBtn = document.querySelector(".btn__close--modal");
const overlayEl = document.querySelector(".overlay");
const modalEl = document.querySelector(".modal");

// Open modal
openModalBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    overlayEl.classList.remove("hidden");
    modalEl.classList.remove("hidden");
  })
);

// Close modal
closeModalBtn.addEventListener("click", () => {
  overlayEl.classList.add("hidden");
  modalEl.classList.add("hidden");
});

overlayEl.addEventListener("click", () => {
  overlayEl.classList.add("hidden");
  modalEl.classList.add("hidden");
});

// Close modal using Esc button
document.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.key === "Escape") {
    overlayEl.classList.add("hidden");
    modalEl.classList.add("hidden");
  }
});
