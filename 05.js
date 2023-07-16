const precos = [30, 10, 54, 76, 1, 4, 35];

let menorDiferenca = false;
const precosIndice = precos.length - 1;

for (i = 0; i < precosIndice - 1; i++) {
  for (j = i + 1; j <= precosIndice; j++) {
    let proximo = precos[j];
    let atual = precos[i];

    let diferenca = atual - proximo;
    diferenca = diferenca < 0 ? false : diferenca;

    if (atual > proximo && diferenca) {
      menorDiferenca = !menorDiferenca
        ? diferenca
        : menorDiferenca > diferenca
        ? diferenca
        : menorDiferenca;
    }
  }
}

console.log(menorDiferenca);
