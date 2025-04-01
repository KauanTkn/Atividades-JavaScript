let num = prompt("Digite um número");

if (num < 0) {
    alert("Número inválido");
} else {
    let n = num | 0; 
    if (n <= 1) {
        alert("Não é um número primo");
    } else {
        let primo = true;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                primo = false;
                break;
            }
        }
        
        if (primo) {
            alert("Seu número é Primo");
        } else {
            alert("Seu número não é Primo");
        }
    }
}
