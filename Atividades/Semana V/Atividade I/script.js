// Seleciona a div principal
const app = document.getElementById("app");

// Criar container principal
const container = document.createElement("div");
container.id = "contador-container";
app.appendChild(container);

// Criar título
const titulo = document.createElement("h2");
titulo.innerText = "Contador de Pessoas";
container.appendChild(titulo);

// Função para criar contador individual
function criarContador(tipo) {
    const section = document.createElement("div");

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

// Criar contadores de homens e mulheres
let homens = criarContador("Homens");
let mulheres = criarContador("Mulheres");

// Criar contador total
const totalContainer = document.createElement("div");
const totalLabel = document.createElement("h3");
totalLabel.innerText = "Total:";
totalContainer.appendChild(totalLabel);

const totalDisplay = document.createElement("span");
totalDisplay.innerText = "0";
totalDisplay.id = "total";
totalContainer.appendChild(totalDisplay);
container.appendChild(totalContainer);

// Atualizar contador total
function atualizarTotal() {
    totalDisplay.innerText = parseInt(homens.innerText) + parseInt(mulheres.innerText);
}

// Criar botão de reset
const btnReset = document.createElement("button");
btnReset.innerText = "Resetar";
btnReset.classList.add("reset");
btnReset.onclick = () => {
    homens.innerText = "0";
    mulheres.innerText = "0";
    totalDisplay.innerText = "0";
};
container.appendChild(btnReset);
