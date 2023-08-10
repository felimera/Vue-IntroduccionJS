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

// const nuevoObjeto = Object.assign(cliente, producto);
const nuevoObjeto = {
  producto,
  cliente,
};
console.log(nuevoObjeto);
console.table(nuevoObjeto);
