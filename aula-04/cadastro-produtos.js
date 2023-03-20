console.log("=== CADASTRO PRODUTOS ===");

// Buscando o elemento no DOM
const btnCadastrar = document.querySelector(".btn-primary");
const formCadastro = document.querySelector("form");

// array literal (vazio)
const cesta = [];

// Ações / Funcionalidades
function cadastrarProduto(e) {
    // console.log(e);
    e.preventDefault();

    const produto = document.querySelector("#produto");
    // console.log(produto);
    // console.log(produto.value);

    const quantidade = document.querySelector("#quantidade");
    // console.log(quantidade);
    // console.log(quantidade.value);

    const preco = document.querySelector("#preco");
    // console.log(preco);
    // console.log(preco.value);

    // objeto literal
    const item = {
        produto: produto.value,
        quantidade: parseFloat(quantidade.value),
        preco: parseFloat(preco.value)
    };

    // adicionar item a cesta (array)
    cesta.push(item);

    // visualizar em formato de tabela no console
    console.table(cesta);

    // construindo as linhas da tabela
    const linhas = cesta.map(function(item) {
                        return `<tr>
                                    <td>${item.produto}</td>
                                    <td>${item.quantidade}</td>
                                    <td>${item.preco}</td>
                            </tr>`;
                   }).join("");

    // atualizando a tabela
    document.querySelector("table tbody").innerHTML = linhas;

    // limpar os campos
    produto.value = '';
    quantidade.value = '';
    preco.value = '';

    // colocar foco no primeiro campo
    produto.focus();
}

// Mapeando os eventos
// btnCadastrar.addEventListener("click", cadastrarProduto);
formCadastro.addEventListener("submit", cadastrarProduto);

// cadastrarProduto(KeyboardEvent)