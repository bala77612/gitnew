function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "admin" && password == "password") {
      alert("Login successful!");
      window.location.href = "dashboard.html"; //redirect to dashboard page
    } else {
      alert("Invalid username or password!");
    }
  }
  