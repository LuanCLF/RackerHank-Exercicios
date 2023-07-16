const precos = [100, 500, 100, 200, 50];

let soma = 0;
let menorNumero = 0;
if (precos.length >= 5) {
  for (item of precos) {
    soma += item;
    let proximo = 0;
    while (proximo >= 0) {
      menorNumero =
        precos[menorNumero] < precos[proximo] ? menorNumero : proximo;

      if (proximo >= precos.length - 1) {
        proximo = -1;
      } else {
        proximo++;
      }
    }
  }
} else {
  for (let item of precos) {
    soma += item;
  }
}

soma = precos.length >= 5 ? soma - precos[menorNumero] : soma;
console.log(soma);
