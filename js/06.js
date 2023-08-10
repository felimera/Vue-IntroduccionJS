// Destructuring a 2 o mas objetos
// Object
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Juan",
  premium: true,
};

console.log("producto.nombre", producto.nombre);
console.log("cliente.nombre", cliente.nombre);

const { nombre } = producto;
const { nombre: nombreCliente } = cliente;
console.log("nombre", nombre);
console.log("nombreCliente", nombreCliente);
