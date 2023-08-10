// Destructuring de arrays
const tecnologias = ["Vue.js", "JavaScript", "Node,js", "HTML", "CSS"];

// Version mas larga
// const vuejs = tecnologias[0];
// console.log("vuejs", vuejs);
// const js = tecnologias[1];
// console.log("js", js);

// Versiona las corta con Destructuring
// const [vuejs, js, node, html] = tecnologias;
const [vuejs, js, , html] = tecnologias;
console.log("vuejs", vuejs);
console.log("js", js);
// console.log("node", node);
console.log("html", html);
