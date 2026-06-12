const productsContainer = document.getElementById("products");

fetch("http://localhost:5000/api/products")
  .then(response => response.json())
  .then(products => {

    products.forEach(product => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>
          <a href="product.html?id=${product._id}">
            ${product.name}
          </a>
        </h3>

        <p>${product.description}</p>

        <h4>₹${product.price}</h4>

        <p>Stock: ${product.stock}</p>

        <button onclick="addToCart('${product._id}')">
          Add to Cart
        </button>
      `;

      productsContainer.appendChild(card);

    });

  })
  .catch(error => {
    console.error(error);
  });


// Add to Cart Function
function addToCart(productId) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(productId);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product Added To Cart");
}


// Logout Function (Ye yahan add karna hai)
function logout() {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

  alert("Logout Successfully!");

  window.location.href = "login.html";
}