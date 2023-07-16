const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let menorNumeroAtual = 0;
let maiorNumeroAtual = 0;

let menorNumero = 0;
let maiorNumero = 0;

let soma = 0;
for (let nota of notas) {
  soma += nota;
  menorNumeroAtual = nota;
  menorNumero = menorNumero === 0 ? menorNumeroAtual : menorNumero;

  maiorNumeroAtual = nota;
  maiorNumero = maiorNumero === 0 ? maiorNumeroAtual : maiorNumero;
  if (menorNumero > menorNumeroAtual || maiorNumero < maiorNumeroAtual) {
    menorNumero =
      menorNumero > menorNumeroAtual ? menorNumeroAtual : menorNumero;
    maiorNumero =
      maiorNumero < maiorNumeroAtual ? maiorNumeroAtual : maiorNumero;
  }
}
let divisor = notas.length - 2;
soma = soma - maiorNumero - menorNumero;
let media = soma / divisor;
console.log(media);
