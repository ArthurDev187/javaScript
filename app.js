alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = 6;
console.log(numeroSecreto);
let chute
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt('Digite um número: ');

    if (chute == numeroSecreto) {
        alert(`Você acertou o número secreto. (${numeroSecreto}), com ${tentativas} tentativas`);
        } else {
            if (chute > numeroSecreto) {
            alert('O número secreto é menor.');
        } else {
            alert('O número secreto é maior.');
        }
        tentativas++;
        }
}
console.log(`Tentativas: ${tentativas}`)
