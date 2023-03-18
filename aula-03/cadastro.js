console.log("=== CADASTRO ===");

// Capturar elementos em tela
const produto = document.querySelector("#produto");
const botaoCadastrar = document.querySelector("#cadastrar");
const listaProdutos = document.querySelector("#produtos");

// Funcionalidades (Ações)
function cadastrarProduto() {
    listaProdutos.innerText = produto.value;
    produto.value = "";
}

// Mapear Eventos
botaoCadastrar.addEventListener("click", cadastrarProduto);