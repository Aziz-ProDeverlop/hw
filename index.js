
let productType = document.getElementById("type-select");
let productName = document.getElementById("product-name");
let productCount = document.getElementById("product-count");


let addBtn = document.querySelector(".add-product");
let clearBtn = document.querySelector(".clear-list");

let productList = document.querySelector(".products-list");
let arrayProducts = [];

addBtn.addEventListener("click", addProduct);

function addProduct() {
    let productTypeValue = productType.value;
    let productNameValue = productName.value;
    let productCountValue = productCount.value;

    if (productTypeValue === "" || productNameValue === "" || productCountValue === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    let productItem = {
        type: productTypeValue,
        name: productNameValue,
        count: productCountValue
    };

    
    arrayProducts.push(productItem);

    renderProducts();

    productType.value = "";
    productName.value = "";
    productCount.value = "";
}

function renderProducts() {
    
    productList.innerHTML = "";


    arrayProducts.forEach((product, index) => {
        let productItem = document.createElement("div");
        productItem.classList.add("product-item");

    
        productItem.innerHTML =
         `<p>Тип продукта: ${product.type}</p>
          <p>Название: ${product.name}</p>
          <p>Количество: ${product.count}</p> `;


        productList.appendChild(productItem);

        let removeButton = productItem.querySelector(".remove-button");
        removeButton.addEventListener("click", () => removeProduct(index));
    });
}

function removeProduct(index) {
    arrayProducts.splice(index, 1);

    renderProducts();
}

clearBtn.addEventListener("click", () => {
    arrayProducts = [];
    renderProducts();
});
