function login(event) {
    event.preventDefault(); // Detiene la acción predeterminada del formulario

    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var email = emailInput.value;
    var password = passwordInput.value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email) && password.length >= 8) {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Error en el inicio de sesión. Verifica tus credenciales.");
        emailInput.value = "";
        passwordInput.value = "";
    }
}

document.getElementById("loginForm").addEventListener("submit", login);

