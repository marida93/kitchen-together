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

    const newIngredient = {
        name: ingredient,
        quantity: quantity,
        unit: unit
    };

    let ingredients = JSON.parse(localStorage.getItem("kitchenIngredients")) || [];

    ingredients.push(newIngredient);

    localStorage.setItem("kitchenIngredients", JSON.stringify(ingredients)
                        );

    displayIngredients();

    ingredientInput.value = "";
    quantityInput.value = "";
    unitInput.value = "";
}

function displayIngredients() {

    const list = document.getElementById("ingredientList");

    list.innerHTML = "";

    const ingredients = JSON.parse(localStorage.getItem("kitchenIngredients")) || [];

    ingredients.forEach(function(ingredient) {

        const newItem = document.createElement("li");

        newItem.textContent =
            `${ingredient.name} — ${ingredient.quantity} ${ingredient.unit}`;

        list.appendChild(newItem);
    });
}
displayIngredients();
