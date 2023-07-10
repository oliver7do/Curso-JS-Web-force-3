function verificarSorteio() {
    const numerosSorteados = [];
    const numerosInput = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value)
    ];

    for (let i = 0; i < numerosInput.length; i++) {
        const numero = numerosInput[i];
        if (isNaN(numero) || numero < 1 || numero > 49) {
            alert('Insira números válidos de 1 a 49');
            return;
        }
        if (numerosSorteados.includes(numero)) {
            alert('Os números inseridos não podem se repetir');
            return;
        }
        numerosSorteados.push(numero);
    }

    numerosSorteados.sort((a, b) => a - b);

    const tabelaResultado = document.getElementById('resultado');
    tabelaResultado.innerHTML = '';

    const linhaSorteados = document.createElement('tr');
    const colunaSorteados = document.createElement('td');
    colunaSorteados.textContent = numerosSorteados.join(', ');
    linhaSorteados.appendChild(colunaSorteados);
    tabelaResultado.appendChild(linhaSorteados);

    const linhaResultado = document.createElement('tr');
    const colunaResultado = document.createElement('td');

    if (numerosSorteados.toString() === numerosInput.toString()) {
        colunaResultado.textContent = 'Parabéns! Você acertou os números!';
    } else {
        colunaResultado.textContent = 'Infelizmente, você errou os números.';
    }

    linhaResultado.appendChild(colunaResultado);
    tabelaResultado.appendChild(linhaResultado);
}
