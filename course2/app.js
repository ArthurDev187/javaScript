let listaNumerosSorteados = [];
let numeroMaximoJogo = 3;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroMaximoJogo}`);
}

exibirMensagemInicial()

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
    let numeroSorteado = parseInt(Math.random() * numeroMaximoJogo + 1);
    let tamanhoListaNumerosSorteados = listaNumerosSorteados.length;
    console.log('Tamanho da lista ' + tamanhoListaNumerosSorteados)
    console.log('Numero maximo sorteado em indice: ' + (numeroMaximoJogo - 1))
    if (tamanhoListaNumerosSorteados == numeroMaximoJogo - 1)
    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        console.log(listaNumerosSorteados);
        return numeroSorteado;

    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    gerarNumeroSecreto();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}