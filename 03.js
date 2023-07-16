const precos = [100, 500, 100, 200, 50];

let soma = 0;
let menorNumero = precos[0];
for (let item of precos) {
  soma += item;
  if (precos.length >= 5) {
    menorNumero = menorNumero > item ? item : menorNumero;
  }
}

soma = precos.length >= 5 ? soma - menorNumero : soma;
console.log(soma);
