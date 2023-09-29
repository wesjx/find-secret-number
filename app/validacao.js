function validacaoNumero(c) {
    const numero = +c

    if (c.toLowerCase() === 'game over' ) {
        document.body.innerHTML = ` 
        <h2> GAME OVER! </h2>
        <button id="jogarBtn" 
        class="jogar-novamente">Jogar Novamente</button>
        `
        document.body.style.backgroundColor = 'black'
        document.body.addEventListener('click', function (e) {
            if (e.target.id === "jogarBtn") {
                window.location.reload();
            }
        });
        return
    } 

    if (verificaSeENumero(numero)) {
        elementoChute.innerHTML += '<div> Valor Invalido. </div>'
        return
    }

    if (verificaSeONumeroEMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div> O chute tem que estar entre ${numeroMenor} e ${numeroMaior}<div>`
        return
    }

    if (numero === numeroAleatorio) { // document.body.innerHTML muda todo o documento da tela
        document.body.innerHTML = `  
        <h2> Voce acertou! </h2>
        <h3> O numero secreto era ${numeroAleatorio} ! </h3>

        <button id="jogarBtn" 
        class="jogar-novamente">Jogar Novamente</button>
        `
        document.body.addEventListener('click', function (e) {
            if (e.target.id === "jogarBtn") {
                window.location.reload();
            }
        });
    } else if (numero < numeroAleatorio) {
        elementoChute.innerHTML += `<div class="acertou">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div class="acertou">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
    
}

function verificaSeENumero(numero) {
    return Number.isNaN(numero);
}

function verificaSeONumeroEMaiorOuMenor(numero) {
    return numero > numeroMaior || numero < numeroMenor
}

function verificaSeAcertou(numero) {
    return numero === numero
}
