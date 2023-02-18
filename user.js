let form = document.getElementById("userForm");
let name = document.getElementById("name");
let age = document.getElementById("age");
let place = document.getElementById("place");
let batch = document.getElementById("batch");
let profession = document.getElementById("profession");

let baseURL = "https://not-masai-repo-but-public-db-json.onrender.com";

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
  } catch (error) {
    console.log(error);
  }
}
