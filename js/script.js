const botão = document.querySelector(".botão");
const nav = document.querySelector(".nav");

botão.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle('body-no-scroll');
});

//-----------------------------------------------//

                // pagina //

 window.revelar = ScrollReveal({reset:true})

revelar.reveal('.left',
{
    duration:2000,
    distance:'90px'
})

//---------------------------------------------//
        
           //--seção principal--//

 revelar.reveal('.img-page',
 {
    duration:2000,
    distance:'90px',
    delay:300
 })

 revelar.reveal('.nome',
{
    duration:2000,
    distance:'90px',
    delay:400
})

 revelar.reveal('.anime',
{
    duration:2000,
    distance:'90px',
    delay:500
})

revelar.reveal('.descrição',
{
    duration:2000,
    distance:'90px',
    delay:700
})

//---------------------------------------------//

           //--icons--//

 revelar.reveal('.icons-anime',
 {
  duration:2000,
  distance:'90px',
  delay:500
 })

 revelar.reveal('.icons-anime-one',
 {
  duration:2000,
  distance:'90px',
  delay:900
 })

revelar.reveal('.icons-anime-two',
{
  duration:2000,
  distance:'90px',
  delay:1400
})

revelar.reveal('.icons-anime-tre',
{
  duration:2000,
  distance:'90px',
  delay:1700
})

//----------------------------------------------//

                //--botão--//


revelar.reveal('.botão-seção',
{
 duration:2000,
 distance:'90px',
 delay:1500
})


//---------------------------------------------//

           //--titulo--//

revelar.reveal('.paragrafo',
{
    duration:2000,
    distance:'90px',
    delay:500
})

revelar.reveal('.paragrafo-two',
{
    duration:2000,
    distance:'90px',
    delay:1200
})


//-------------------------------------------//
           //--Tecnologias--//

revelar.reveal('.icons-div-one',
{
  duration:2000,
  distance:'90px',
  delay:800
})

revelar.reveal('.icons-div-two',
{
  duration:2000,
  distance:'90px',
  delay:1300
})

revelar.reveal('.icons-div-tre',
{
  duration:2000,
  distance:'90px',
  delay:1900
})

revelar.reveal('.icons-div-for',
{
  duration:2000,
  distance:'90px',
  delay:2400
})

revelar.reveal('.icons-div-six',
{
  duration:2000,
  distance:'90px',
  delay:3100
})

revelar.reveal('.icons-div-rever',
{
  duration:2000,
  distance:'90px',
  delay:3800
})

//----------------------------------------------------//

                  //--card dos projetos--//

revelar.reveal('.carde-one',
{
  duration:2000,
  distance:'90px',
  delay:300
})

revelar.reveal('.carde-two',
{
  duration:2000,
  distance:'90px',
  delay:600
})

revelar.reveal('.carde-tre',
{
  duration:2000,
  distance:'90px',
  delay:1200
})

//------------------------------------------------//

              //--card tela principal--//


revelar.reveal('.card-one',
{
  duration:2000,
  distance:'90px',
  delay:800
})

revelar.reveal('.card-two',
{
  duration:2000,
  distance:'90px',
  delay:1500
})

revelar.reveal('.card-tre',
{
  duration:2000,
  distance:'90px',
  delay:1900
})

