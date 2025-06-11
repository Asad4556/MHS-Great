document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const cnic = document.getElementById("cnic").value.trim();
  const password = document.getElementById("password").value.trim();

  if (cnic === "34501-8971113-7" && password === "Asad@2723") {
    window.location.href = "admin_dashboard.html";
  } else {
    document.getElementById("loginMessage").textContent = "Invalid CNIC or Password.";
  }
});
