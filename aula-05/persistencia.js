console.log("=== PERSISTENCIA ===");

// capturar o elemento no DOM
const form = document.querySelector("#persistencia");
console.log(form);

let id = localStorage.length;

// implementar a acao de salvar
function salvar(e) {
    e.preventDefault();

    // localizando o campo de entrada de dados
    const campo = document.querySelector("#campo");
    
    // capturando o valor digitado
    console.log(campo.value);

    // persistir o resultado
    localStorage.setItem(id++, campo.value);

    // limpar o campo
    campo.value = "";

    // dar foco no campo
    campo.focus();

    // retornaItens();
}

// implementar a acao de listar
function retornaItens() {
    // const items = [];

    // for (let i = 0; i < localStorage.length; i++) {
    //     items.push(localStorage.getItem(i));
    // }

    // const linhas = items.map(function(item) {
    //     return `<li>${item}</li>`
    // }).join('');

    // document.querySelector('#lista').innerHTML = linhas;

    document.querySelector('#lista').innerHTML = Array.from(localStorage).map(function(item) {
        return `<li>${item}</li>`
    }).join('');
}

// retornaItens();

// mapear um evento para o elemento
form.addEventListener("submit", salvar);
form.addEventListener("submit", retornaItens);

// window.onload = retornaItens;
document.addEventListener("DOMContentLoaded", retornaItens);
