let stringCorrompida = "$Ailuropoda@ melanoleuca!";

let textoPurificado = false;

for (letra of stringCorrompida) {
  let corrompido = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];
  let c = 0;

  while (corrompido.length > c && corrompido) {
    if (letra === corrompido[c]) {
      corrompido = false;
      letra = false;
    } else {
      c++;
    }
  }

  if (letra) {
    textoPurificado = !textoPurificado ? letra : textoPurificado + letra;
  }
}

console.log(textoPurificado);
