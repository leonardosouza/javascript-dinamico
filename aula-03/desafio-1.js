console.log("=== DESAFIO 1 - EVENTOS ===");

let valor = document.getElementById("valor");
let valorAlterado = 0;

function incremento() {
    valorAlterado++;
    valor.innerText = valorAlterado;
}

function decremento() {
    valorAlterado--;
    valor.innerText = valorAlterado;
}