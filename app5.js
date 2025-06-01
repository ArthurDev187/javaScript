// 1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// console.log('Seja muito bem vindo!!!')


// 2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a 
// mensagem "Olá, [seu nome]!" no console do navegador.
// let nome = 'Arthur Rodrigues da Silva'
// let mensagem = 'Seja muito bem vindo: '
// console.log(mensagem + nome)


// 3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
// let nome = 'Arthur Rodrigues da Silva'
// alert(`Olá, ${nome}`)


// 4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// let suaLinguagem = prompt('Qual linguagem de programação você mais gosta? ')
// mensagem = 'Então você gosta de '
// console.log(mensagem + suaLinguagem)

// 5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores 
// numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o 
// resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar 
// a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 46
// let valor2 = 7
// let resultado = valor1 + valor2
// mensagem = `O valor1: ${valor1} mais o valor2: ${valor2} somados ficam: ${resultado}`
// console.log(mensagem)


// 6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores 
// numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o 
// resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar 
// a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 10
// let valor2 = 6
// let resultado = valor1 - valor2
// let mensagem = `A diferença entre valor1: ${valor1} e valor2: ${valor2} é: ${resultado}`
// console.log(mensagem)



// 7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize 
// um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem 
// apropriada no console.
// let userIdade = prompt('Digite sua idade: ')
// let mensagem;
// if (userIdade < 18) {
//     mensagem = 'Você é menor de idade.';
// } else {
//     mensagem = 'Você é maior de idade.';
// }
// console.log(mensagem);



// 8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, 
// negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// let numero = prompt('Digite um número: ');
// let mensagem;
// if (numero > 0) {
//     mensagem = 'O número é positivo.';
// } else if (numero < 0) {
//     mensagem = 'O número é negativo.';
// } else {
//     mensagem = 'O número é zero.';
// }
// console.log(mensagem);



// 9 - Use um loop while para imprimir os números de 1 a 10 no console.
// let numero = 1;
// while (numero < 11) {
//     console.log(numero);
//     numero++;
// }


// 10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar 
// se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// let nota = prompt('Digite a nota do aluno: ')
// let mensagem
// if (nota >= 7) {
//     mensagem = 'Aprovado'
// } else {
//     mensagem = 'Reprovado'
// }
// console.log(mensagem)



// 11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numero = parseInt(Math.random() * 10 + 1)
console.log(`Número: ${numero}`)