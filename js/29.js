import { sumar as suma, restar } from "./funciones.js";

const sumar = function () {
  console.log("Suma");
};

console.log("suma(#,#)", suma(10, 20));
console.log("restar(#,#)", restar(100, 20));

sumar();
