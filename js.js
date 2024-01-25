function login(event) {
    event.preventDefault(); // Detiene la acción predeterminada del formulario

    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var email = emailInput.value;
    var password = passwordInput.value;

    // Validación de correo electrónico usando una expresión regular simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email) && password.length >= 8) {
        alert("Inicio de sesión exitoso");
        // No es necesario return true; aquí, ya que la acción predeterminada se realizará
    } else {
        alert("Error en el inicio de sesión. Verifica tus credenciales.");
        // Borra los datos en los campos de correo electrónico y contraseña
        emailInput.value = "";
        passwordInput.value = "";
    }
}

document.getElementById("loginForm").addEventListener("submit", login);

