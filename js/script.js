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

//-------------------------------------------//
           //--Tecnologias--//

revelar.reveal('.icons-div-one',
{
  duration:2000,
  distance:'90px',
  delay:500
})

revelar.reveal('.icons-div-two',
{
  duration:2000,
  distance:'90px',
  delay:1000
})

revelar.reveal('.icons-div-tre',
{
  duration:2000,
  distance:'90px',
  delay:1500
})

revelar.reveal('.icons-div-for',
{
  duration:2000,
  distance:'90px',
  delay:2000
})

revelar.reveal('.icons-div-six',
{
  duration:2000,
  distance:'90px',
  delay:2500
})

revelar.reveal('.icons-div-rever',
{
  duration:2000,
  distance:'90px',
  delay:3000
})

//----------------------------------------------------//

revelar.reveal('.card-one',
{
  duration:2000,
  distance:'90px',
  delay:500
})

revelar.reveal('.card-two',
{
  duration:2000,
  distance:'90px',
  delay:1000
})

revelar.reveal('.card-tre',
{
  duration:2000,
  distance:'90px',
  delay:1500
})

//------------------------------------------------//
