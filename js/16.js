const tecnologias = ["Vue.js", "JavaScript", "Node,js", "HTML", "CSS", "Git"];
const numeros = [10, 20, 30];

// Includes
let resultado = tecnologias.includes("GraphQL");
console.log("resultado", resultado);
resultado = tecnologias.includes("Git");
console.log("resultado", resultado);
// FindIndex
resultado = tecnologias.findIndex((tech) => tech === "Git");
// Some
resultado = numeros.some((numero) => numero > 25);
// Find
resultado = numeros.find((numero) => numero === 5);
// Every
resultado = numeros.every((numero) => numero > 15);
// Reduce
resultado = numeros.reduce((total, numero) => numero + total, 0);
// Filter
resultado = numeros.filter((tech) => tech !== "Vue.js");

console.log("resultado", resultado);
