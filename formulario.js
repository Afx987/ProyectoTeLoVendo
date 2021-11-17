document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    let mensaje = document.getElementById('mensaje').value;
    let nombre = document.getElementById('nombre').value;
    let inputMensaje = document.getElementById('inputMensaje').value;

    if (nombre.length == 0 && inputMensaje.length == 0 && mensaje.length == 0) {
        alert('No has escrito ningún campo');
        return;

    } else if (nombre.length == 0) {
        alert('No has escrito nada en el nombre');
        return;
    } else if (inputMensaje.length == 0) {
        alert('No has escrito nada en el correo');
        return;
    } else if (mensaje.length == 0) {
        alert('No has escrito nada en el mensaje');
        return;
    } else {
        this.submit();
    }

}