let user = document.getElementById("user");
let admin = document.getElementById("admin");

// console.log(user, admin);

user.addEventListener("click", () => {
  window.location.href = "user.html";
});

admin.addEventListener("click", () => {
  window.location.href = "admin.html";
});
