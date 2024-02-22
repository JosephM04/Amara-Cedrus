"use strict";

const btnBrunch = document.querySelector(".btn-brunch");
const btnCena = document.querySelector(".btn-cena");
const btnBebidas = document.querySelector(".btn-bebidas");
const btnPostres = document.querySelector(".btn-postres");

const menuBrunch = document.getElementById("menu-brunch");
const menuCena = document.getElementById("menu-cena");
const menuBebidas = document.getElementById("menu-bebidas");
const menuPostres = document.getElementById("menu-postres");

function ocultarTodo() {
    menuBrunch.style.display = "none";
    menuCena.style.display = "none";
    menuBebidas.style.display = "none";
    menuPostres.style.display = "none";
}

btnBrunch.addEventListener("click", () => {
    ocultarTodo();
    menuBrunch.style.display = "flex";
});

btnCena.addEventListener("click", () => {
    ocultarTodo();
    menuCena.style.display = "flex";
});

btnBebidas.addEventListener("click", () => {
    ocultarTodo();
    menuBebidas.style.display = "flex";
});

btnPostres.addEventListener("click", () => {
    ocultarTodo();
    menuPostres.style.display = "flex";
});