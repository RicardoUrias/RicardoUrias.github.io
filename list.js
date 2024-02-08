document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemList.childElementCount + 1;
        var clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = `${total}`;

        // Agregar una imagen al clon
        var imgElement = clone.querySelector("[data-id='image']");
        imgElement.src = "https://rickandmortyapi.com/api/character/avatar/94.jpeg";
        imgElement.alt = "Rick Sanchez";

        clone.querySelector("[data-id='title']").textContent = "Product";
        clone.querySelector("[data-id='content']").textContent = "It's a new item";
        itemList.appendChild(clone);
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});

