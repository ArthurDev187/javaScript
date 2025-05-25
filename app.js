alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = 9;
let chute = prompt('Digite um número entre 1 e 10');

console.log(numeroSecreto == chute);
if (numeroSecreto == chute) {
    alert(`Isso aí, você acertou o número secreto. ${numeroSecreto}`);
    console.log(`Isso aí, você acertou o número secreto. ${numeroSecreto}`);
} else {
    alert('Que pena, você errou o número secreto. :(' );
    console.log(`Que pena, você errou o número secreto. :( O seu chute: ${chute}`);
}
