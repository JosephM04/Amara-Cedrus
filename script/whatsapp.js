const whatsapp = document.querySelector(".bxl-whatsapp");
const whatsappCont = document.querySelector(".ws-confirmar");
const btnCancel = document.querySelector(".ws-x");
const btnConfirmar = document.querySelector(".btn-ws-confirmar");

whatsapp.addEventListener("click", () => {
    whatsappCont.classList.toggle("ws-cont-show");
})

btnCancel.addEventListener("click", () => {  
      whatsappCont.classList.remove("ws-cont-show");
});
btnConfirmar.addEventListener("click", () => {  
      whatsappCont.classList.remove("ws-cont-show");
});


