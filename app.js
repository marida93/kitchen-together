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

    ingredients.forEach(function(ingredient, index) {

        const newItem = document.createElement("li");

        newItem.textContent =
            `${ingredient.name} — ${ingredient.quantity} ${ingredient.unit} `;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {

            ingredients.splice(index, 1);

            localStorage.setItem(
                "kitchenIngredients",
                JSON.stringify(ingredients)
            );

            displayIngredients();
        };

        newItem.appendChild(deleteButton);

        list.appendChild(newItem);
    });
}
displayIngredients();

function findRecipes() {

    const ingredients =
        JSON.parse(localStorage.getItem("kitchenIngredients")) || [];

    const recipeResults = document.getElementById("recipeResults");

    if (ingredients.length === 0) {
        recipeResults.innerHTML =
            "<p>Add some ingredients first! 🥕</p>";
        return;
    }

    recipeResults.innerHTML = `
        <h3>What you can cook 🍳</h3>
        <p>You currently have:</p>
        <ul>
            ${ingredients.map(function(ingredient) {
                return `<li>${ingredient.name}</li>`;
            }).join("")}
        </ul>
        <p>We're ready to find recipes using these ingredients! 👩‍🍳</p>
    `;
}
