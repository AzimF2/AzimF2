const containerOne = document.querySelector("#contOne");
const containerTwo = document.querySelector("#contTwo");
const submitBtn = document.querySelector("#smtbtn");
const numberButtons = document.querySelectorAll(".btns");
const rating_span = document.querySelector("#rating");
let rate;
numberButtons.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    const actv = document.querySelector(".checked");
    if (actv) {
      actv.classList.remove("checked");
    }
    e.target.classList.add("checked");
    rate = btns.innerHTML;
  });
});
submitBtn.addEventListener("click", () => {
  if (rate) {
    rating_span.innerHTML = rate;
    containerOne.classList.add("hidden");
    containerTwo.classList.add("show");
  }
});
