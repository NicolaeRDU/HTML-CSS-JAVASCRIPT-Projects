"use strict";

// Select the items
const openModalBtns = document.querySelectorAll(".btn__open--modal");
const closeModalBtn = document.querySelector(".btn__close--modal");
const overlayEl = document.querySelector(".overlay");
const modalEl = document.querySelector(".modal");

const openModal = function () {
  overlayEl.classList.remove("hidden");
  modalEl.classList.remove("hidden");
};

const closeModal = function () {
  overlayEl.classList.add("hidden");
  modalEl.classList.add("hidden");
};

// Open modal
openModalBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    openModal();
  })
);

// Close modal
closeModalBtn.addEventListener("click", () => {
  closeModal();
});

overlayEl.addEventListener("click", () => {
  closeModal();
});

// Close modal using Esc button
document.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.key === "Escape") {
    closeModal();
  }
});
