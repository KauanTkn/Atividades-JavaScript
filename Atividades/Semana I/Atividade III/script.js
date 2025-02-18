let num = prompt("Digite um número");

if (num < 0) {
    alert("Número inválido");
} else {
    let n = num | 0; 
    if (n < 0) {
        alert("Número negativo não tem fatorial");
    } else {
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i; 
        }
        alert("O fatorial de " + n + " é " + resultado);
    }
}
