// Función para mostrar un mensaje de bienvenida
function mostrarMensaje() {
    alert("¡Bienvenido a la página oficial del Liverpool FC!");
}

// Función para cambiar el color de fondo de la página
function cambiarColorFondo() {
    document.body.style.backgroundColor = "gray";
}

// Agregamos eventos a los botones
document.addEventListener('DOMContentLoaded', function() {
    const mensajeBtn = document.getElementById("mensajeBtn");
    const colorBtn = document.getElementById("colorBtn");

    if (mensajeBtn) {
        mensajeBtn.addEventListener("click", mostrarMensaje);
    }

    if (colorBtn) {
        colorBtn.addEventListener("click", cambiarColorFondo);
    }
});




// Función para validar el formulario de contacto
function validarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("¡Gracias por contactarnos!");
    }
}

// Verificar si estamos en la página de contacto y agregar validación
document.addEventListener('DOMContentLoaded', function() {
    const contactoForm = document.getElementById("contactoForm");
    
    if (contactoForm) {
        contactoForm.addEventListener("submit", validarFormulario);
    }
});
