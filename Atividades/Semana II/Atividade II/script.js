function attRelogio() {
    const relogioElement = document.getElementById('relogio');
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    relogioElement.textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(attRelogio, 1000);
attRelogio();
