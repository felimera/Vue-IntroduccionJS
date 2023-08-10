// Arrays o arreglos
const tecnologias = ["Vue.js", "JavaScript", "Node,js", "HTML", "CSS"];
// Agregar elementos al final del arreglo
tecnologias.push("Git");
// Agregar elementos al inicio del arreglo
tecnologias.unshift("Git");
// Genera una copia y agrega un nuevo elemento al inicio o final del arreglo
const nuevoArreglo = ["Git1", ...tecnologias, "Git2"];
// Elimina un elemento al final del arreglo
tecnologias.pop();
// Elimina un elemento al inicio del arreglo
tecnologias.shift();
// Elimna los elementos desde una posicion inicial y la cantidad de elementos a eliminar
tecnologias.splice(2, 1);

const tecnologias2 = tecnologias.filter(function (tech) {
  // console.log('tech',tech);
  return tech != "HTML";
});

console.table(tecnologias2);
console.log("tecnologias", tecnologias);
console.log("tecnologias[1]", tecnologias[1]);
console.table(tecnologias);

console.table("nuevoArreglo", nuevoArreglo);
