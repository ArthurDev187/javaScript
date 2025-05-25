/*
let quantidadeMilhas = 8000 // Exemplo de quantidade de milhas
// Se a quantidade de milhas for maior que 5000, o desconto é de 10%
// Se a quantidade de milhas for maior ou igual a 30000, o desconto é de 20%
// Se a quantidade de milhas for menor que 5000, não há desconto
let porcentagemDesconto = 0;



if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else if (quantidadeMilhas > 5000) {
    (porcentagemDesconto = porcentagemDesconto + 10);
} else {
    porcentagemDesconto = 0;
}

console.log(`A porcentagem de desconto é: ${porcentagemDesconto}%`);
// Exemplo de uso
*/

// another exercise

alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Parabéns!! Você Acertou!!');
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
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
