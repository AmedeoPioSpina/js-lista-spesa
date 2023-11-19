let listaDellaSpesa = [
    "Sale",
    "Pepe",
    "Pasta",
    "Mele",
    "Cola",
    "Zucchine",
    "Pane",
    "Fazzoletti"
]
let body = document.querySelector("body")
let newUl = document.createElement("ul");
let loopCounter = 0;

while(loopCounter < listaDellaSpesa.length){
    let newLi = document.createElement("li");
    newLi.textContent = listaDellaSpesa[loopCounter];
    newUl.appendChild(newLi);
    loopCounter++;
}

body.appendChild(newUl);

