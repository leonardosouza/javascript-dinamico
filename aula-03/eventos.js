console.log("=== EVENTOS ===");

function exibirUmAlerta() {
    console.log("exibir um alerta!");

    const msgBotao = document.getElementById("mensagem-botao"); 
    console.log(msgBotao);
    
    console.log(msgBotao.innerText); // recuperei o conteúdo da tag <p>
    
    // alterar o conteúdo da tag <p>
    msgBotao.innerText = "exibir um alerta!";

    console.log(msgBotao.innerText); // mostrar o conteúdo modificado
}


function exibirOutroAlerta() {
    console.log("exibir outro alerta!");

    const msgLink = document.querySelector("#mensagem-link"); 
    console.log(msgLink);
    
    console.log(msgLink.innerText); // recuperei o conteúdo da tag <p>

    // alterar o conteúdo da tag <p>
    msgLink.innerText = "exibir outro alerta!";

    console.log(msgLink.innerText); // mostrar o conteúdo modificado
}