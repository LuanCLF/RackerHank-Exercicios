const resultados = ["V", "E", "V", "E"];

let pontuacao = 0;

for (let letra of resultados) {
  if (letra === "V") {
    pontuacao += 3;
  } else if (letra === "E") {
    pontuacao += 1;
  }
}
console.log(pontuacao);
