"use strict";

// Intro
const scrollDown = document.querySelector(".scrollDown");

// Main section
const section2 = document.querySelector("#section--2");
const goToProjects = document.querySelector(".main__btn");
const typedTextSpan = document.querySelector(".typed-text");

const words = [
  "a Junior Web Developer",
  "a person who wants to learn more",
  "a chill guy",
  "a gamer",
  "an One Piece fan",
];
const typingDelay = 100;
const erasingDelay = 100;
// Delay between current and next text
const newLetterDelay = 1000;
let index = 0;
let charIndex = 0;

// Projects section
const tabs = document.querySelectorAll(".projects__tab");
const tabsContainer = document.querySelector(".projects__tab--container");
const tabsContent = document.querySelectorAll(".projects__content");

// PROJECTS tab ////////////
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".projects__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("projects__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("projects__content--active"));

  clicked.classList.add("projects__tab--active");

  document
    .querySelector(`.projects__content--${clicked.dataset.tab}`)
    .classList.add("projects__content--active");
});

// MAIN to PROJECTS
goToProjects.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});

// NAV links logic //////////
document.querySelector(".nav__list").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    if (!id) return;
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Go to MAIN
document.querySelector(".begin").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#section--1").scrollIntoView({ behavior: "smooth" });
});

// Show go to MAIN
setTimeout(function () {
  scrollDown.classList.remove("hidden");
}, 1500);

// Added dynamic words
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    if (words.length) {
      setTimeout(type, newLetterDelay);
    }
  }, 4000);
});

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
