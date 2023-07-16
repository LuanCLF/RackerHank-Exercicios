let letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia"];

let perdeu = 0;
for (item of palavras) {
  if (item[0] !== letra) {
    perdeu++;
  }
}
console.log(perdeu);
