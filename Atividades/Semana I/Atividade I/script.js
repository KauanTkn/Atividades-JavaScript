let num = prompt("Digite um número");

if (num < 0) {
    alert("Número inválido");
} else {
    let n = num | 0; 
    let resultado = n % 2; 

    if (resultado === 0) {
        alert("Seu número é Par");
    } else if (resultado === 1) {
        alert("Seu número é Ímpar");
    }

    alert("Resultado da operação (n/2): " + (n / 2)); 
}
