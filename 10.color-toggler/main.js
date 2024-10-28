let toggler = document.querySelector("#switch");

toggler.addEventListener("click", () => {
  //   if (toggler.checked) {
  //     document.body.style.backgroundColor = "#000";
  //   } else {
  //     document.body.style.backgroundColor = "#fff";
  //   }

  toggler.checked === true
    ? (document.body.style.backgroundColor = "#000")
    : (document.body.style.backgroundColor = "#fff");
});
