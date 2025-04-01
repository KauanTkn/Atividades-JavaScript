function verifPalindromo() {
    const texto = document.getElementById('texto').value;
    
    const textoFormatado = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const textoInvertido = textoFormatado.split('').reverse().join('');

    if (textoFormatado === textoInvertido) {
        alert('É um palíndromo!');
    } else {
        alert('Não é um palíndromo.');
    }
}