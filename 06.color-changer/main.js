const btn = document.querySelector("#btn");
let hex = document.querySelector("#hexCode");

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i <= 5; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  document.body.style.backgroundColor = color;
  hex.textContent = color;
}

btn.addEventListener("click", randomColor);
