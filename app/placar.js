// Função para salvar pontos na memória do navegador
function salvarPontos() {
  const pontosTime1 = document.getElementById('pontosTime1').valueAsNumber;
  const pontosTime2 = document.getElementById('pontosTime2').valueAsNumber;
    localStorage.setItem('pontosTime1', pontosTime1);
        localStorage.setItem('pontosTime2', pontosTime2);
    }
    
// Função para carregar pontos da memória do navegador
    function carregarPontos() {
        const pontosTime1 = localStorage.getItem('pontosTime1') || 0;
        const pontosTime2 = localStorage.getItem('pontosTime2') || 0;

      document.getElementById('pontosTime1').value = pontosTime1;
      document.getElementById('pontosTime2').value = pontosTime2;
    }

// Adicionar e subtrair pontos para o Time 1
    document.getElementById('adicionarTime1').addEventListener('click', function () {
      const pontosTime1Input = document.getElementById('pontosTime1');
      pontosTime1Input.value = pontosTime1Input.valueAsNumber + 1;
      salvarPontos();
    });

    document.getElementById('subtrairTime1').addEventListener('click', function () {
      const pontosTime1Input = document.getElementById('pontosTime1');
      pontosTime1Input.value = pontosTime1Input.valueAsNumber - 1;
      salvarPontos();
    });

// Adicionar e subtrair pontos para o Time 2
    document.getElementById('adicionarTime2').addEventListener('click', function () {
      const pontosTime2Input = document.getElementById('pontosTime2');
      pontosTime2Input.value = pontosTime2Input.valueAsNumber + 1;
      salvarPontos();
    });
    
    document.getElementById('subtrairTime2').addEventListener('click', function () {
      const pontosTime2Input = document.getElementById('pontosTime2');
      pontosTime2Input.value = pontosTime2Input.valueAsNumber - 1;
      salvarPontos();
    });

// Zerar placar
    document.getElementById('zerar').addEventListener('click', () => {
      const pontosTime1Input = document.getElementById('pontosTime1');
      const pontosTime2Input = document.getElementById('pontosTime2');
        pontosTime1Input.value = 0;
        pontosTime2Input.value = 0;
        localStorage.clear()
    })

// Carregar pontos ao carregar a página
    carregarPontos();
