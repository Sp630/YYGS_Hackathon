document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    // OPTIONAL: Add validation logic here
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple example: check if username and password match something
    if (username === "admin" && password === "password123") {
      window.location.href = "adminmap.html"; // Redirect to the admin map
    } else {
      document.getElementById("error-msg").textContent = "Invalid login credentials.";
    }
  });
});
