function login(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validación de correo electrónico usando una expresión regular simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email) && password.length >= 8) {
        alert("Inicio de sesión exitoso");
        // No es necesario return true; aquí, ya que la acción predeterminada se realizará
    } else {
        alert("Error en el inicio de sesión. Verifica tus credenciales.");
        event.preventDefault();  // Detiene la acción predeterminada del formulario
    }
}

document.getElementById("loginForm").addEventListener("submit", login);
