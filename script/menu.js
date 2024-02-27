"use strict";
const menuDivBtn = document.querySelector(".menu-div-btn");
const btnBrunch = document.querySelector(".btn-brunch");
const btnCena = document.querySelector(".btn-cena");
const btnBebidas = document.querySelector(".btn-bebidas");
const btnPostres = document.querySelector(".btn-postres");

// select all the menu buttons
const allMenuButtons = document.querySelectorAll(".menu-btn");

const menuBrunch = document.getElementById("menu-brunch");
const menuCena = document.getElementById("menu-cena");
const menuBebidas = document.getElementById("menu-bebidas");
const menuPostres = document.getElementById("menu-postres");


function ocultarTodo() {
    menuBrunch.style.display = "none";
    menuCena.style.display = "none";
    menuBebidas.style.display = "none";
    menuPostres.style.display = "none";
    allMenuButtons.forEach(btn => {
        btn.classList.remove("active");
    })

}

btnBrunch.addEventListener("click", () => {
    ocultarTodo();
    menuBrunch.style.display = "flex";
    btnBrunch.classList.add("active");
    
});

btnCena.addEventListener("click", () => {
    ocultarTodo();
    menuCena.style.display = "flex";
    btnCena.classList.add("active");
});

btnBebidas.addEventListener("click", () => {
    ocultarTodo();
    menuBebidas.style.display = "flex";
    btnBebidas.classList.add("active");
});

btnPostres.addEventListener("click", () => {
    ocultarTodo();
    menuPostres.style.display = "flex";
    btnPostres.classList.add("active");
});

let prevScrollPos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    // Comprueba si el usuario ha hecho scroll más de 30 píxeles hacia abajo
    if (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 1) {
        menuDivBtn.classList.remove("show");
    } else {
        // Comprueba si el usuario ha hecho scroll más de 30 píxeles hacia arriba
        if (prevScrollPos < currentScrollPos && currentScrollPos - prevScrollPos > 1) {
            menuDivBtn.classList.add("show");
        }
    }

    prevScrollPos = currentScrollPos;
};