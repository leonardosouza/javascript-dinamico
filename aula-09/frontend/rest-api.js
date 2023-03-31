console.log("=== REST API ===");


async function buscarPosts() {
    const url = 'http://localhost:8080/posts';

    const config = {
        method: 'GET'
    };
    
    const resp = await fetch(url, config)
    const data = await resp.json();

    document.querySelector("#get-posts").innerText = JSON.stringify(data);
}

async function gravarPost() {
    const url = "http://localhost:8080/posts";

    const data = JSON.parse(document.querySelector("#content").value);

    const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json"
        })
    }

    const resp = await fetch(url, config);
    console.log(resp); 
}

async function apagarPost() {
    const id = document.querySelector("#number").value;
    
    const url = `http://localhost:8080/posts/${id}`;

    const config = {
        method: "DELETE"
    }

    const resp = await fetch(url, config);
    console.log(resp);
}


document.querySelector("#buscar").addEventListener("click", buscarPosts);
document.querySelector("#gravar").addEventListener("click", gravarPost);
document.querySelector("#apagar").addEventListener("click", apagarPost);