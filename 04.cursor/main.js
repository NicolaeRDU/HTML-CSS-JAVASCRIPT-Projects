const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  // e.pageX === across
  // e.pageY === up and down

  moveCursor(e.pageX, e.pageY);
});

const moveCursor = function (pageX, pageY) {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
