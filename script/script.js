"use strict";
const whatsapp = document.querySelector(".bxl-whatsapp");
const whatsappCont = document.querySelector(".ws-confirmar");
const btnCancel = document.querySelector(".ws-x");
const btnConfirmar = document.querySelector(".btn-ws-confirmar");
const loader = document.querySelector(".loader-cont");
const boxes = document.querySelectorAll(".box");
// loader que desaparecerá cuando carge la primera página

window.addEventListener("load", () => {
  loader.style.display = "none";
});


// slides para imagenes de la pagina principal
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // cambia la imagen cada 3.5
}


// boton de whatsapp: al dar click aparecerá una pregunta de confirmar

whatsapp.addEventListener("click", () => {
  whatsappCont.classList.toggle("ws-cont-show");
})

btnCancel.addEventListener("click", () => {  
    whatsappCont.classList.remove("ws-cont-show");
});
btnConfirmar.addEventListener("click", () => {  
    whatsappCont.classList.remove("ws-cont-show");
});

// Animación de cuando aparecerá cada producto al hacer scroll

window.addEventListener("scroll",checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom ) {
            box.classList.add("show")
        } else {
            box.classList.remove("show");
        }
    })
}



