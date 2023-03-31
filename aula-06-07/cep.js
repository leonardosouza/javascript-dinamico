console.log("=== CEP ===");

// Actions

function onlyNumbers(e) {
    // console.log(arguments[0]);
    // console.log(e.target.value);
    // console.log(this.value, this.value.match(/\d+/));
    // console.log(this.value, /\d+/.test(this.value));
    this.value = this.value.replace(/\D+/g, "");
}

function validateEntry() {    
    if (this.value.length === 8) {
        // this.style.borderColor = ""; 
        // this.style.borderWidth = "";
        // this.style.backgroundColor = "";
        this.classList.remove("error");
        getAddress(this.value);
    } else {        
        // this.style.borderColor = "red";
        // this.style.borderWidth = "2px";
        // this.style.backgroundColor = "yellow";
        this.classList.add("error");
        this.focus();
    }
}

function getAddress(postalCode) {
    // endpoint
    // const endpoint = "https://viacep.com.br/ws/" + postalCode + "/json/";
    const endpoint = `https://viacep.com.br/ws/${postalCode}/json/`;
    
    // config
    const config = {
        method: "GET"
    };

    // request
    /*
    
                  Promise
                    |
                 <pending>
                /         \
           fulfilled     rejected
           .then()       .catch()
    */
    fetch(endpoint, config)
        .then(function(resp) { return resp.json(); })
        .then(getAddressSuccess)
        .catch(getAddressError);
}

function getAddressSuccess(address) {
    const { logradouro, cep, localidade, uf, bairro } = address;

    const card = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${logradouro}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                            ${bairro} - ${localidade} - ${uf}
                        </h6>
                        <p class="card-text">${cep}</p>
                    </div>
                </div>`;

    document.querySelector(".cards").innerHTML = card;
}

function getAddressError() {
    console.log("deu ruim 1!");
}



// Mapping Events
document.querySelector("#cep").addEventListener("input", onlyNumbers); // onlyNumbers(InputEvent)
document.querySelector("#cep").addEventListener("focusout", validateEntry);
