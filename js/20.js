// Operador ternario

const disponible = 100;
const total = 500;
const tarjeta = true;

// disponible > total
//   ? console.log("Si puede pagar con saldo")
//   : tarjeta
//   ? console.log("Si puedes pagar con tarjeta")
//   : console.log("No puedes pagar");

disponible > total || tarjeta
  ? console.log("Si puedes pagar con saldo o tarjeta")
  : console.log("No puedes pagar");
