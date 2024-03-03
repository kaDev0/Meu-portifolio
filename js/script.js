const botão = document.querySelector(".botão");
const nav = document.querySelector(".nav");

botão.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle('body-no-scroll');
});

 // pagina //

 window.revelar = ScrollReveal({reset:true})

revelar.reveal('.left',
{
    duration:2000,
    distance:'90px'
})


