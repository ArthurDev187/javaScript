// 1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1;

// while (contador < 11) {
//     console.log(`contador: ${contador}`)
//     contador++;
// }


// 2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10;

// while (contador > -1) {
//     alert(`Contador: ${contador}`)
//     contador--;
// }


// 3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, 
// usando um loop while no console do navegador.

let userNumber = prompt('Digite um número: ')

while (userNumber > -1) {
    alert(`Contagem regressiva: ${userNumber}`)
    userNumber--;
}