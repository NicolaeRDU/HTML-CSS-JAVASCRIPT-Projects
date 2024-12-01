"use strict";

// Select the items
const openModalBtns = document.querySelectorAll(".btn__open--modal");
const closeModalBtn = document.querySelector(".btn__close--modal");
const overlayEl = document.querySelector(".overlay");

// Open modal
openModalBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    overlayEl.classList.remove("hidden");
  })
);

// Close modal
closeModalBtn.addEventListener("click", () => {
  overlayEl.classList.add("hidden");
});
