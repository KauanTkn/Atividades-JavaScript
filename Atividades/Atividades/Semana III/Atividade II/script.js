class Carro {
    constructor(marca, modelo, ano, cor, km, valor_fipe) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.km = km;
        this.valor_fipe = valor_fipe;
    }

    anosUtilizacao() {
        let anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }

    valorMercado() {
        let kmAno = this.km / this.anosUtilizacao();
        if (kmAno <= 30000) {
            return this.valor_fipe * 1.1;
        } else if (kmAno <= 50000) {
            return this.valor_fipe;
        } else {
            return this.valor_fipe * 0.9;
        }
    }

    exibirInformacoes() {
        return `O veículo tem ${this.anosUtilizacao()} anos de utilização.<br>
                Valor de mercado: R$ ${this.valorMercado().toFixed(2)}`;
    }
}

function cadastrarCarro() {
    let carro = new Carro(
        document.getElementById("marca").value,
        document.getElementById("modelo").value,
        parseInt(document.getElementById("ano").value),
        document.getElementById("cor").value,
        parseInt(document.getElementById("km").value),
        parseFloat(document.getElementById("valor_fipe").value)
    );

    document.getElementById("resultado").innerHTML = carro.exibirInformacoes();
}