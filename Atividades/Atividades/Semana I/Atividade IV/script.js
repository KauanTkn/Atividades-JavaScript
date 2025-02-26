
let dado = prompt("Por favor, insira um dado:");


let resposta = confirm("Você deseja verificar o tipo do dado informado?");

if (resposta) {
    let tipo = typeof dado;
    document.body.innerHTML = `O tipo do dado informado é: ${tipo}`;
} else {
    document.body.innerHTML = "Obrigado por visitar esta página.";
}
