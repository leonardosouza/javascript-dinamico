console.log("=== PERSISTENCIA ===");

// capturar o elemento no DOM
const form = document.querySelector("#persistencia");
// let id = localStorage.length;

let pessoas = (localStorage.pessoas) ? JSON.parse(localStorage.pessoas) : [] ;

console.log(pessoas);

// implementar a acao de salvar
function salvar(e) {
    e.preventDefault();

    // localizando o campo de entrada de dados
    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");

    // adicionar o nome no array (nomes)
    pessoas.push({ 
        nome: nome.value, 
        idade: idade.value 
    });

    console.log(pessoas);
    
    // persistir o resultado
    localStorage.setItem("pessoas", JSON.stringify(pessoas));

    // limpar o nome
    nome.value = "";
    idade.value = "";

    // dar foco no nome
    nome.focus();
}

// implementar a acao de listar
function retornaItens() {
    document.querySelector('#lista').innerHTML = pessoas.map(function(pessoa) {
        return `<li>${pessoa.nome} - ${pessoa.idade}</li>`
    }).join('');
}

// mapear um evento para o elemento
form.addEventListener("submit", salvar);
form.addEventListener("submit", retornaItens);

// window.onload = retornaItens;
document.addEventListener("DOMContentLoaded", retornaItens);
