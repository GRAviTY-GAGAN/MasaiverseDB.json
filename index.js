let user = document.getElementById("user");
let admin = document.getElementById("admin");

// console.log(user, admin);
let baseURL = "https://not-masai-repo-but-public-db-json.onrender.com";

user.addEventListener("click", () => {
  window.location.href = "user.html";
});

admin.addEventListener("click", () => {
  window.location.href = "admin.html";
});

let users = [];

window.addEventListener("load", () => {
  fetch(`${baseURL}/users`)
    .then((req) => req.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

//backend link: https://not-masai-repo-but-public-db-json.onrender.com/
