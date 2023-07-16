let stringCorrompida = "$Ailuropoda@ melanoleuca!";

let textoPurificado = false;

for (letra of stringCorrompida) {
  let corrompido = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];
  let c = 0;

  for (let item of corrompido) {
    if (letra === item) {
      letra = false;
    }
  }

  if (letra) {
    textoPurificado = !textoPurificado ? letra : textoPurificado + letra;
  }
}

console.log(textoPurificado);
