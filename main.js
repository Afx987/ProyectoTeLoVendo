function mostrarHora() {
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundos = momentoActual.getSeconds();
    fecha = momentoActual.getDate() + "-" + (momentoActual.getUTCMonth() + 1) + "-" + momentoActual.getFullYear();
    horaImprimible = hora + " : " + minuto + " : " + segundos;

    document.getElementById('fecha').textContent = fecha + " " + horaImprimible;
}

mostrarHora();