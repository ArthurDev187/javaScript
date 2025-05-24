// alert('Boas vindas ao jogo do número secreto.');
// let numeroSecreto = 2;
// let chute = prompt('Digite um número entre 1 e 10');

// if (numeroSecreto == chute) {
//     console.log("Isso aí, você acertou o número secreto. (2)");
// }

// Exercício 1:

let nome = ('Lua');
let idade = 10;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! preencha todos os campos corretamente.');
nome = prompt('Digite o seu nome:');
idade = prompt('Digite a sua idade:');

console.log('Nome: ' + nome);
console.log('Idade: ' + idade);
console.log('Número de vendas: ' + numeroDeVendas);
console.log('Saldo Disponivel: ' + saldoDisponivel);

if (idade >= 18) {
    alert('Você pode tirar a carteira de motorista.');
}
