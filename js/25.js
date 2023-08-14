const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

// heading.addEventListener("click", sumar);

// function sumar() {
//   console.log(2 + 5);
// }

heading.addEventListener("click", () => {
  heading.textContent = "Nuevo heading al dar le click";
});

heading.addEventListener("dblclick", () => {
  heading.textContent = "Nuevo heading al dar le doble click";
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("diste click");
    enlace.textContent = "Nuevo texto";
  });
});
