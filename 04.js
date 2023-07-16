const sequencia = ">>>>>>>>>";

let indiceAtual = 0;

for (seta of sequencia) {
  if (seta === ">") {
    indiceAtual = indiceAtual === 6 ? 0 : indiceAtual + 1;
  } else {
    indiceAtual = indiceAtual === 0 ? 6 : indiceAtual - 1;
  }
}
console.log(indiceAtual);
