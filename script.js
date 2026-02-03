
function validatelogin() {
  let user = document.forms['login']['username'].value;
  let pass = document.getElementById('password').value;

  if (user === "admin" || user === "Admin" && pass === "123" ) {
    alert("Welcome");

    // pindah ke halaman index.html
    window.location.href = "index.html";

    return false; // supaya form tidak reload
  } else {
    alert("Username atau password salah");
    return false;
  }
}

  

