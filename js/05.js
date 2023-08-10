// Object
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};
// No permite modificar el contenido del objeto
// Object.freeze(producto);
// Permite modificar valores, pero no permite agregar unas nuevas ni eleminarlas
Object.seal(producto);

//Re-escribir un valor
producto.nombre = "Monitor curvo";
// Añadir un valor
producto.imagen = "imagen.jpg";
// Eliminar
// delete producto.disponible;
// const { disponible, ...producto2 } = producto;
// console.log("producto2", producto2);
// console.log("typeof producto2", typeof producto2);

console.log("producto", producto);
console.log("typeof producto", typeof producto);
