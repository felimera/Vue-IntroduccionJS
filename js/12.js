// Iteradores en JS
const tecnologias = ["Vue.js", "JavaScript", "Node,js", "HTML", "CSS", "Git"];

// const vuejs = tecnologias[0];
// const js = tecnologias[1];
// const html=tecnologias[3];
// console.log("vuejs", vuejs);
// console.log("js", js);
// console.log("html", html);

// forEach
tecnologias.forEach(function (tech) {
  console.log("tech", tech);
});

// map
const arrayMap = tecnologias.map(function (tech) {
  return tech;
});
console.log("arrayMap", arrayMap);
