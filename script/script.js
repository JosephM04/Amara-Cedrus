"use strict"
// loader que aparecerá hasta que carge la primera imagen


let loader = document.querySelector(".loader-cont");

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



