// Tipos de datos
// undefined
let cliente;
console.log("cliente", cliente);
console.log("typeof cliente", typeof cliente);
// Boolean
const descuento = true;
console.log("descuento", descuento);
console.log("typeof descuento", typeof descuento);
// number
const numero1 = 20.3;
const numero2 = 30;
const numero3 = -200;
console.log("numero1", numero1);
console.log("typeof numero1", typeof numero1);
console.log("numero2", numero2);
console.log("typeof numero2", typeof numero2);
console.log("numero3", numero3);
console.log("typeof numero3", typeof numero3);
// String o cadenas de texto
const alumno = "Juan";
let producto = "Monitor de 20 pulgas";
console.log("alumno", alumno);
console.log("typeof alumno", typeof alumno);
console.log("producto", producto);
console.log("typeof producto", typeof producto);
// Numeros sumamente  grandes
const numeroGrande = BigInt(124254788245785115254785496300);
console.log("numeroGrande", numeroGrande);
console.log("typeof numeroGrande", typeof numeroGrande);
// Symbols
// No hay ningun symbols que sea iguales
const primerSymbols = Symbol(1);
const segundoSymbols = Symbol(1);
console.log(primerSymbols === segundoSymbols);
// Object
const numeros = [1, 2, 3, 4, 5];
const descuentoObject = null;
const estudiante = {};
console.log("numeros", numeros);
console.log("typeof numeros", typeof numeros);
console.log("descuentoObject", descuentoObject);
console.log("typeof descuentoObject", typeof descuentoObject);
console.log("estudiante", estudiante);
console.log("typeof estudiante", typeof estudiante);
