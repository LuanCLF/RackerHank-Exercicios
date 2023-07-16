const primeiraLetra = "c";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];

let selecionada = 0;
let tem = false;

for (let item of palavras) {
  if (primeiraLetra === item[0]) {
    if (segundaLetra === item[1]) {
      console.log(item);
      selecionada = item;
      tem = true;
    }
  }
}
if (!tem) {
  console.log("NENHUMA");
}
