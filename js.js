function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica de autenticación, por ejemplo, verificar en una base de datos

    // Validación de correo electrónico usando una expresión regular simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email) && password.length >= 6) {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Error en el inicio de sesión. Verifica tus credenciales.");
    }
}

