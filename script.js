const button_wrapper = document.querySelector("#btn-all");
const separation_div = document.querySelector("#sep");
const hidden_btn = document.querySelector("#dma");
const era_btn = document.querySelector("#s");
const tooltip = document.querySelector(".tooltip");
const era_btn_i = document.querySelector("#mahir");
era_btn.addEventListener("click", (e) => {
  const opacity_1 = document.querySelector(".opacity-1");
  if (opacity_1) {
    opacity_1.classList.remove("opacity-1");
    era_btn.style.background = "hsl(210, 46%, 95%)";
    era_btn.style.color = "hsl(214, 17%, 51%)";
  } else {
    era_btn.style.background = "hsl(214, 17%, 51%)";
    era_btn.style.color = "hsl(210, 46%, 95%)";
    if (document.body.clientWidth > 768) {
      tooltip.classList.add("opacity-1");
    } else if (document.body.clientWidth <= 768) {
      separation_div.classList.toggle("click");
      era_btn.style.background = "hsl(210, 46%, 95%)";
      era_btn.style.color = "hsl(214, 17%, 51%)";
    }
  }
});
hidden_btn.addEventListener("click", () => {
  separation_div.classList.remove("click");
});
document.addEventListener("click", (e) => {
  if (e.target.className !== "fa-solid fa-share") {
    tooltip.classList.remove("opacity-1");
  }
  if (e.target.id !== "mahir") {
    era_btn.style.background = "hsl(210, 46%, 95%) ";
    era_btn.style.color = "hsl(214, 17%, 51%)";
  }
});
