let numeroSecreto = gerarNumeroSecreto();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute() {
    console.log('O botao foi clicado.');
}

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 10 + 1);
}

console.log(`Numero Secreto ${numeroSecreto}`)