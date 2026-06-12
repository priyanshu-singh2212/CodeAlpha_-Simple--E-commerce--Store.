const productContainer =
document.getElementById("product-details");

const params =
new URLSearchParams(window.location.search);

const productId = params.get("id");

fetch(`http://localhost:5000/api/products/${productId}`)
  .then(res => res.json())
  .then(product => {

    productContainer.innerHTML = `
      <h2>${product.name}</h2>

      <p>
        <strong>Description:</strong>
        ${product.description}
      </p>

      <p>
        <strong>Price:</strong>
        ₹${product.price}
      </p>

      <p>
        <strong>Stock:</strong>
        ${product.stock}
      </p>

      <p>
        <strong>Category:</strong>
        ${product.category}
      </p>

      <button onclick="goBack()">
        Back To Products
      </button>
    `;

  })
  .catch(error => {
    console.error(error);
  });

function goBack() {
  window.location.href = "index.html";
}