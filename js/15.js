// Arrow Function

const sumar = (numero1 = 0, numero2 = 10) => console.log(numero1 + numero2);
sumar(1, 2);

const tecnologias = ["Vue.js", "JavaScript", "Node,js", "HTML", "CSS", "Git"];

// forEach
tecnologias.forEach((tech) => console.log("tech", tech));

// map
const arrayMap = tecnologias.map((tech) => tech);
console.log("arrayMap", arrayMap);

// filter
const tecnologia2 = tecnologias.filter((tech) => tech !== "HTML");
console.log("tecnologia2", tecnologia2);
