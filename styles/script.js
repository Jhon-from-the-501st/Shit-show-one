function searchFunction() {
  var input, filter, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  a = document.querySelectorAll(".box");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function aunthenticate() {
  var username = document.getElementsByName("uname")[0].value;
  var password = document.getElementsByName("psw")[0].value;
  if(username === "admin" && password === "admin") {
      window.location.href = "/index.html";
      alert("Login successfull");
  } else {
      alert("Invalid username or password");
  }
}

var modal = document.getElementById("popup");
var span = document.getElementsByClassName("close")[0];
var yes = document.getElementById("yes");
var no = document.getElementById("no");

function popup() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

yes.onclick = function() {
  modal.style.display = "none";
}

no.onclick = function() {
  modal.style.display = "none";
  window.location.href = "/store/header/signup.html";
}

function logout(){
  if(confirm("Are you sure you want to logout?")){
      alert("You have been logged out!");
      window.location.href = "/store/header/Login.html";
  }
}