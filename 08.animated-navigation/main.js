const toggle = document.querySelector("#toggler");
const nav = document.querySelector("#nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
