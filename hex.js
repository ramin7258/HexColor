const button = document.querySelector("button");
const H2EL = document.querySelector("h2");
const bgEL = document.querySelector("div");

button.addEventListener("click", function () {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8);
  bgEL.style.background = color;
  button.style.color = color;
  H2EL.innerHTML = color;
});
