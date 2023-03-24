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

}

function getAddress() {
    
}

// Mapping Events
document.querySelector("#cep").addEventListener("input", onlyNumbers); // onlyNumbers(InputEvent)