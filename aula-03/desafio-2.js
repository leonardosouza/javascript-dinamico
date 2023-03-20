console.log("=== DESAFIO 2 - EVENTOS ===");

// Capturando elementos
const number = document.querySelector("#number");
const less = document.querySelector("#less");
const more = document.querySelector("#more");

// Funcionalidades
function doLess() {
    console.log("less");
    number.innerText = --value;
}

function doMore() {
    console.log("more");
    number.innerText = ++value;
}

// Mapeamento de Eventos
less.addEventListener("click", doLess);
more.addEventListener("click", doMore);