console.log("=== Explorando o DOM ===");

// console.log(window); // objeto global
// console.log(window.document); // objeto documento html
// console.log(document); // objeto documento html

// objeto.propriedade
document.head; // extrai a tag <head>
document.body; // extrai a tag <body>
document.images; // extrai a coleção de tags <img>
document.links; // extrai a coleção de tags <a>
document.scripts; // extrai a coleção de tags <script>

// objeto.metodo()
console.log(document.getElementById("tit-explorando")); // extrai a tag com o identificador exclusivo
console.log(document.getElementById("tit-explorando").innerText);
console.log(document.getElementById("tit-explorando").id); // extrai o atributo (id) do item específico

console.log(document.getElementsByTagName("h1")); // extrai a coleção de tags <h1>
console.log(document.getElementsByTagName("h1")[0]); // extrai um item específico da coleção de tags <h1>
console.log(document.getElementsByTagName("h1")[0].innerText); // extrai o conteúdo de um item específico
console.log(document.getElementsByTagName("a")); // extrai a coleção de tags <a>
console.log(document.getElementsByTagName("a")[0]); // extrai um item específico da coleção de tags <a>
console.log(document.getElementsByTagName("a")[0].innerText); // extrai o conteúdo do item específico
console.log(document.getElementsByTagName("a")[0].href); // extrai o atributo (href) do item específico

console.log(document.getElementsByClassName("borda")); // extrai a coleção de classes (.borda)
console.log(document.getElementsByClassName("borda")[0]); // extrai um item específico da coleção classes (.borda)
console.log(document.getElementsByClassName("borda")[0].innerText); // extrai o conteúdo do item específico
console.log(document.getElementsByClassName("borda")[0].className); // extrai o atributo (href) do item específico

console.log(document.querySelector("img")); // extrai a primeira tag (img) localizada no documento
console.log(document.querySelectorAll("img")); // extrai todas as tags (img) localizadas no documento