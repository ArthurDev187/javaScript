let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagem = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!!');
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O numero secreto e menor');
    } else {
        exibirTextoNaTela('p', 'O numero secreto e maior');
    }
    limparCampo();
    tentativas++;
}

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}
