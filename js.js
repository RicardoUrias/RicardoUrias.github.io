function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica de autenticación, por ejemplo, verificar en una base de datos

    if (username === "usuario" && password === "contrasena") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Error en el inicio de sesión. Verifica tus credenciales.");
    }
}
