"use strict";

const inputEl = document.querySelector("#create--task input");
const btnSend = document.querySelector("#create--task button");
const tasksList = document.querySelector("#tasks--list");

btnSend.addEventListener("click", () => {
  if (!inputEl.value) {
    alert("Please type something");
  } else {
    tasksList.innerHTML += `
      <div id="task">
        <span class="task__description">${inputEl.value}</span>
        <button class="task__delete">Delete</button>
      </div>
    `;

    const btnDelete = document.querySelectorAll("#tasks--list button");

    btnDelete.forEach((btn) =>
      btn.addEventListener("click", function () {
        this.parentNode.remove();
      })
    );

    const taskDescription = document.querySelectorAll("#task span");

    taskDescription.forEach((task) =>
      task.addEventListener("click", function () {
        this.classList.toggle("completed");
      })
    );

    inputEl.value = "";
  }
});
