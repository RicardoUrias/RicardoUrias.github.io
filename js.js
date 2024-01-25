function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validación de correo electrónico usando una expresión regular simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email) && password.length >= 8) {
        alert("Inicio de sesión exitoso");
        return true;  // Envía el formulario
    } else {
        alert("Error en el inicio de sesión. Verifica tus credenciales.");
        return false;  // No envía el formulario
    }
}

