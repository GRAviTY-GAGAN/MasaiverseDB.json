let form = document.getElementById("userForm");
let name = document.getElementById("name");
let age = document.getElementById("age");
let place = document.getElementById("place");
let batch = document.getElementById("batch");
let profession = document.getElementById("profession");

let baseURL = "http://localhost:3000";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userObj = {
    id: new Date().getTime(),
    name: name.value,
    age: Number(age.value),
    place: place.value,
    batch: batch.value,
    profession: profession.value,
  };
  //   console.log(userObj);
  register(userObj);
});

async function register(user) {
  //   console.log(user);
  try {
    let req = await fetch(`${baseURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    let res = await req.json();
    console.log(res);
    alert("Successfully registered");
    name.value = "";
    age.value = "";
    place.value = "";
    batch.value = "";
    profession.value = "";
  } catch (error) {
    console.log(error);
  }
}
