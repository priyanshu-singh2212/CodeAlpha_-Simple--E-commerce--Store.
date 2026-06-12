const cartItemsDiv = document.getElementById("cart-items");
const totalDiv = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(products => {

    const cartProducts = products.filter(product =>
      cart.includes(product._id)
    );

    cartProducts.forEach(product => {

      total += product.price;

      cartItemsDiv.innerHTML += `
  <div class="cart-card">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
  </div>
`;
    });

    totalDiv.innerText = `Total: ₹${total}`;
  });

document.getElementById("checkoutBtn")
.addEventListener("click", () => {

    const orderData = {
        userEmail:localStorage.getItem("userEmail"),
        products: cart,
        totalAmount: total
    };

    fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    .then(data => {

        alert("Order Placed Successfully");

        localStorage.removeItem("cart");

        window.location.reload();
    })
    .catch(error => {
        console.error(error);
        alert("Failed to place order");
    });

});