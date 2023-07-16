let stringCorrompida = "$Ailuropoda@ melanoleuca!";

let textoPurificado = 0;
let c = 0;
let podeBotar = false;

for (letra of stringCorrompida) {
  let corrompido = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];
  while (corrompido) {
    if (letra === corrompido[c]) {
      corrompido = false;
      podeBotar = false;
    } else if (corrompido.length === c + 1) {
      podeBotar = true;
      corrompido = false;
      c = 0;
    } else {
      c++;
    }
  }
  if (podeBotar) {
    textoPurificado =
      textoPurificado === 0 ? letra : textoPurificado + `${letra}`;
  }
}

stringCorrompida = textoPurificado;

console.log(stringCorrompida);
