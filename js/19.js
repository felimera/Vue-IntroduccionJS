// Oeprador OR y AND

const disponible = 100;
const total = 500;
const tarjeta = true;

if (tarjeta || disponible > total) {
  console.log("Si puedes pagar");
} else {
  console.log("No puedes pagar, ponte a lavar los platos");
}
