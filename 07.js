const disparos = [0, 85, 710, 70, 80, 30];
let eTiro = 0;
for (item of disparos) {
  if (item > 70) {
    eTiro = eTiro >= 100 ? 100 : (eTiro += 1);
    tem = true;
  }
}
if (eTiro >= 3) {
  console.log(eTiro);
} else {
  console.log("ELIMINADO");
}
