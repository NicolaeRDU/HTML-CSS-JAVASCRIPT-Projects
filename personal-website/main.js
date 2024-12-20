// TODO

// - logo one piece la projects /// optional

// - o noua sectiune de "INTRO" dupa navbar

"use strict";

// Main section
const section2 = document.querySelector("#section--2");
const goToProjects = document.querySelector(".main__btn");

// Projects section
const tabs = document.querySelectorAll(".projects__tab");
const tabsContainer = document.querySelector(".projects__tab--container");
const tabsContent = document.querySelectorAll(".projects__content");

// ////////////
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

// //////////////
goToProjects.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});

// //////////
document.querySelector(".nav__list").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    if (!id) return;
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
