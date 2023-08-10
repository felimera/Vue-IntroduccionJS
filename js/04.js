// Object
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};
console.log("producto", producto);
console.log("typeof producto", typeof producto);
console.table(producto);
console.log("producto.nombre", producto.nombre);
console.log("typeof producto.nombre", typeof producto.nombre);
console.log("producto.precio", producto.precio);
console.log("typeof producto.precio", typeof producto.precio);
console.log("producto['nombre']", producto["nombre"]);
console.log("typeof producto['nombre']", typeof producto["nombre"]);
// Destructuring
const { nombre } = producto;
console.log("nombre", nombre);
console.log("typeof nombre", typeof nombre);
// Object literal
const autenticado = true;
const usuario = "Juan";
const nuevoObjeto = {
  autenticado,
  user: usuario,
};
console.log("nuevoObjeto", nuevoObjeto);
console.log("typeof nuevoObjeto", typeof nuevoObjeto);
