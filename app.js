function sayHello() {
    alert("Welcome to Kitchen Together! 🥰");
}

function addIngredient() {

    const input = document.getElementById("ingredientInput");
    const ingredient = input.value;

    if (ingredient === "") {
        return;
    }

    const list = document.getElementById("ingredientList");

    const newItem = document.createElement("li");

    newItem.textContent = ingredient;

    list.appendChild(newItem);

    input.value = "";
}