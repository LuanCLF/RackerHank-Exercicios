let letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia"];

let erros = 0;
for (item of palavras) {
  if (item[0] !== letra) {
    erros++;
  }
}
console.log(erros);
