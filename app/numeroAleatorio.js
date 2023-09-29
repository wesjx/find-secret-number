const numeroMenor = 0;
const numeroMaior = 100;

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = numeroMenor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = numeroMaior

const numeroAleatorio = sorteiaNumero();

function sorteiaNumero() {
    return parseInt(Math.random() * numeroMaior)
}
console.log(numeroAleatorio)
