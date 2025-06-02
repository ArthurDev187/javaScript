// Desafios
// 1 Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// 2 Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// 3 Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

// 4 Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// 5 Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// Desafio 1:

/*
let askDay = prompt('Qual dia da semana é hoje? ');

if (askDay === 'Sábado' || askDay === 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
*/

// Desafio 2

alert('Vamos ver se o número é positivo ou negativo.')
let userNumber = prompt('Digite um número: ')
console.log(`Número digitado pelo usuário: ${userNumber}`)
if (userNumber < 0) {
    alert(`O número ${userNumber}  é negativo.`)
} else if (userNumber > 0) {
    alert(`O número ${userNumber} é positivo.`) 
} else {
    alert('O número zero é neutro.')
}