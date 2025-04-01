class ListaDinamica {
    constructor() {
        this.valores = [];
    }

    adicionarItem() {
        let input = document.getElementById("novoItem");
        if (!input) {
            console.error("Elemento 'novoItem' não encontrado.");
            return;
        }
        let valor = input.value.trim();
        if (valor !== "") {
            this.valores.push(valor);
            this.ordenarLista();
            this.atualizarLista();
            input.value = ""; // Limpa o campo de entrada
        } else {
            alert("Digite um valor válido!");
        }
    }

    ordenarLista() {
        this.valores.sort();
    }

    atualizarLista() {
        let lista = document.getElementById("listaOrdenada");
        lista.innerHTML = "";
        this.valores.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            lista.appendChild(li);
        });
    }
}

window.lista = new ListaDinamica();
