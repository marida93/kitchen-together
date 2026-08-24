function sayHello() {
    alert("Welcome to Kitchen Together! 🥰");
}

function addIngredient() {

    const ingredientInput = document.getElementById("ingredientInput");
    const quantityInput = document.getElementById("quantityInput");
    const unitInput = document.getElementById("unitInput");

    const ingredient = ingredientInput.value;
    const quantity = quantityInput.value;
    const unit = unitInput.value;

    if (ingredient === "" || quantity === "" || unit === "") {
        alert("Please fill in all the fields.");
        return;
    }

    const list = document.getElementById("ingredientList");

    const newItem = document.createElement("li");

    newItem.textContent = `${ingredient} — ${quantity} ${unit}`;

    list.appendChild(newItem);

    ingredientInput.value = "";
    quantityInput.value = "";
    unitInput.value = "";
}
