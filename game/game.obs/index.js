let winCount = 0;  // Contador de vitórias

function startGame() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
}

function play(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    // Atualizar ícones
    document.getElementById('player-icon').src = `images/${playerChoice}.png`;
    document.getElementById('bot-icon').src = `images/${botChoice}.png`;

    // Determinar resultado
    let result;
    if (playerChoice === botChoice) {
        result = 'Empate!';
    } else if (
        (playerChoice === 'pedra' && botChoice === 'tesoura') ||
        (playerChoice === 'papel' && botChoice === 'pedra') ||
        (playerChoice === 'tesoura' && botChoice === 'papel')
    ) {
        result = 'Você venceu!';
        winCount++;
        if (winCount === 3) {
            // Redirecionar para a tela de sucesso após 3 vitórias seguidas
            document.getElementById('game-screen').classList.add('hidden');
            document.getElementById('success-screen').classList.remove('hidden');
        }
    } else {
        result = 'Bot venceu!';
        winCount = 0;  // Resetar o contador de vitórias após uma derrota
    }

    // Mostrar resultado
    document.getElementById('result').textContent = result;
}
