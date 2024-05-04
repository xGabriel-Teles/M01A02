/* 5. 
Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

const prompt = require('prompt-sync')();

function main() {
    console.log('========================================================================');
    console.log('Bem-vindo ao jogo de JoKenPo!')
    let playerOne = (prompt('Jogador 01: Escreva a opção escolhida (Pedra, Papel ou Tesoura): ')).toLowerCase();
    let playerTwo = (prompt('Jogador 02: Escreva a opção escolhida (Pedra, Papel ou Tesoura): ')).toLowerCase();
    console.log();

    (checkWinner = function (playerOne, playerTwo) {
        if (playerOne === 'pedra') {
            if (playerTwo === 'pedra') {
                return console.log('Empate!');
            } else if (playerTwo === 'papel') {
                return console.log('Jogador 02 venceu!');
            } else if (playerTwo === 'tesoura') {
                return console.log('Jogador 01 venceu!');
            }
        }
        if (playerOne === 'papel') {
            if (playerTwo === 'papel') {
                return console.log('Empate!');
            } else if (playerTwo === 'tesoura') {
                return console.log('Jogador 02 venceu!');
            } else if (playerTwo === 'pedra') {
                return console.log('Jogador 01 venceu!');
            }
        }
        if (playerOne === 'tesoura') {
            if (playerTwo === 'tesoura') {
                return console.log('Empate!');
            } else if (playerTwo === 'pedra') {
                return console.log('Jogador 02 venceu!');
            } else if (playerTwo === 'papel') {
                return console.log('Jogador 01 venceu!');
            }
        }
        
    })(playerOne, playerTwo)
    console.log('========================================================================');
}
main()
