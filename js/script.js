const botão = document.querySelector(".botão");
const nav = document.querySelector(".nav");

botão.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle('body-no-scroll');
});



