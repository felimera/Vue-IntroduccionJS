const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;
  console.log("nombre", nombre);
  console.log("password", password);
  if (nombre === "" || password === "") {
    console.log("Todos los campos son obligatorios");
    return;
  }
  console.log("Todo bien, enviando...");
});
