document.addEventListener("DOMContentLoaded", () => {
    // Agrega un escucha de clic al botón "Agregar"
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        // Obtén la lista y el template del DOM
        var itemList = document.getElementById("my-list");
        var template = document.getElementById("list-template");

        // Calcula el número total de elementos en la lista
        var total = itemList.childElementCount + 1;

        // Clona el contenido del template
        var clone = template.content.cloneNode(true);

        // Modifica el número en el clon
        clone.querySelector("[data-id='number']").textContent = `${total}`;

        // Agrega una imagen al clon
        var imgElement = clone.querySelector("[data-id='image']");
        imgElement.src = "https://rickandmortyapi.com/api/character/avatar/94.jpeg";
        imgElement.alt = "Rick Sanchez";

        // Modifica el título y el contenido en el clon
        clone.querySelector("[data-id='title']").textContent = "Product";
        clone.querySelector("[data-id='content']").textContent = "It's a new item";

        // Agrega la URL de la imagen al clon
        clone.querySelector("[data-id='imagen']").textContent = imgElement.src;

        // Agrega el clon a la lista
        itemList.appendChild(clone);
    });

    // Agrega un escucha de clic al botón "Limpiar"
    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        // Limpia todos los elementos de la lista
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});


