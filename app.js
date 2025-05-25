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













// Exercício 1:

// let nome = ('Lua');
// let idade = 10;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// alert('Erro! preencha todos os campos corretamente.');
// nome = prompt('Digite o seu nome:');
// idade = prompt('Digite a sua idade:');

// console.log('Nome: ' + nome);
// console.log('Idade: ' + idade);
// console.log('Número de vendas: ' + numeroDeVendas);
// console.log('Saldo Disponivel: ' + saldoDisponivel);

// if (idade >= 18) {
//     alert('Você pode tirar a carteira de motorista.');
// }
