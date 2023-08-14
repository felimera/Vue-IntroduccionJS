const inputNombre = document.querySelector("#nombre");
const inputPassword = document.querySelector("#password");
const heading = document.querySelector(".heading");

inputNombre.addEventListener("input", (e) => {
  console.log("Escribiendo....");
  console.log("e", e);
  console.log("e.target.value", e.target.value);
  console.log("e.target.value.length", e.target.value.length);

  heading.textContent = e.target.value;
});

inputPassword.addEventListener("input", (e) => {
  console.log(e.target.type);
  e.target.type = "text";

  setTimeout(() => {
    e.target.type = "password";
  }, 500);
});
inputPassword.addEventListener("input", () => {
  console.log(inputPassword.target.type);
  inputPassword.target.type = "text";

  setTimeout(() => {
    inputPassword.target.type = "password";
  }, 500);
});
