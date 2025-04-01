const app = document.getElementById("app");

const container = document.createElement("div");
container.id = "contador-container";
app.appendChild(container);

const titulo = document.createElement("h2");
titulo.innerText = "Contador de Pessoas";
container.appendChild(titulo);

function criarContador(tipo, imgSrc) {
    const section = document.createElement("div");
    section.classList.add("contador-box");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = tipo;
    img.classList.add("icone");
    section.appendChild(img);

    const label = document.createElement("h3");
    label.innerText = tipo;
    section.appendChild(label);

    const display = document.createElement("span");
    display.innerText = "0";
    display.classList.add("contador");
    section.appendChild(display);

    const btnAdd = document.createElement("button");
    btnAdd.innerText = "+";
    btnAdd.classList.add("increment");
    btnAdd.onclick = () => {
        let valor = parseInt(display.innerText);
        display.innerText = valor + 1;
        atualizarTotal();
    };
    section.appendChild(btnAdd);

    const btnRemove = document.createElement("button");
    btnRemove.innerText = "-";
    btnRemove.classList.add("decrement");
    btnRemove.onclick = () => {
        let valor = parseInt(display.innerText);
        if (valor > 0) {
            display.innerText = valor - 1;
            atualizarTotal();
        }
    };
    section.appendChild(btnRemove);

    container.appendChild(section);
    return display;
}

let homens = criarContador("Homens", "homem.png");
let mulheres = criarContador("Mulheres", "mulher.png");

const totalContainer = document.createElement("div");
const totalLabel = document.createElement("h3");
totalLabel.innerText = "Total:";
totalContainer.appendChild(totalLabel);

const totalDisplay = document.createElement("span");
totalDisplay.innerText = "0";
totalDisplay.id = "total";
totalContainer.appendChild(totalDisplay);
container.appendChild(totalContainer);

function atualizarTotal() {
    totalDisplay.innerText = parseInt(homens.innerText) + parseInt(mulheres.innerText);
}

const btnReset = document.createElement("button");
btnReset.innerText = "Resetar";
btnReset.classList.add("reset");
btnReset.onclick = () => {
    homens.innerText = "0";
    mulheres.innerText = "0";
    totalDisplay.innerText = "0";
};
container.appendChild(btnReset);
