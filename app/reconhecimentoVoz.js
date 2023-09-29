const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    c = e.results[0][0].transcript 
    exibeNaTela(c)
    validacaoNumero(c)
}

function exibeNaTela(c) {
    chute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${c}</span>
    `
}

recognition.addEventListener('end', () => {
    recognition.start()
})

