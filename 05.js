const precos = [30, 10, 54, 76, 1, 4, 35];
let proximo = 1;
let atualIndice = 0;
let diferencaAtual = 0;
let menorDiferenca = 0;

const precosIndice = precos.length - 1;
while (proximo <= precosIndice) {
  if (precos[atualIndice] > precos[proximo]) {
    diferencaAtual = precos[atualIndice] - precos[proximo];
    diferencaAtual = diferencaAtual < 0 ? diferencaAtual * -1 : diferencaAtual;

    menorDiferenca = menorDiferenca === 0 ? diferencaAtual : menorDiferenca;
    if (menorDiferenca > diferencaAtual) {
      menorDiferenca = diferencaAtual;
    }
    atualIndice = proximo === precosIndice ? (atualIndice += 1) : atualIndice;
    proximo = proximo === precosIndice ? atualIndice + 1 : (proximo += 1);
  } else if (proximo === precosIndice) {
    atualIndice++;
    proximo = atualIndice + 1;
  } else {
    proximo++;
  }
}

console.log(menorDiferenca);
