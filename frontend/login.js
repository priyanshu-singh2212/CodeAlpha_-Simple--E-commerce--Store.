function loginUser() {

  const user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {

    if (data.user) {

      localStorage.setItem(
        "userEmail",
        data.user.email
      );

      alert("Login Successful");

      window.location.href = "index.html";

    } else {

      alert(data.message);

    }

  });

}