const heading = document.querySelector(".heading");

const inputNombre = document.querySelector("#nombre");
console.log("inputNombre", inputNombre);
inputNombre.value = "Valor por defecto";
console.log("inputNombre", inputNombre);

const enlaces = document.querySelectorAll(".navegacion a");
enlaces.forEach((enlace) => (enlace.textContent = "Nuevo texto"));
