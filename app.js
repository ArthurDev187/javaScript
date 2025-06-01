alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);

let chute
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt('Digite um número: ');

    if (chute == numeroSecreto) {
        break;
        } else {
            if (chute > numeroSecreto) {
            alert('O número secreto é menor.');
        } else {
            alert('O número secreto é maior.');
        }
        tentativas++;
        }
}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)
