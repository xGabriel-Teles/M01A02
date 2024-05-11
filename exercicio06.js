/* 6. 
Crie um jogo onde o computador vai sortear um número entre 1 e 5. 
O jogador vai tentar descobrir qual foi o valor sorteado.
*/

const prompt = require('prompt-sync')();

let correctNumber = Math.floor(Math.random()*100/20)+1;

let guessNumber;
let attempts = 0;
while (guessNumber !== correctNumber){
    guessNumber = parseInt(prompt('Digite um número entre 1 e 5: '));
    attempts++
        if(guessNumber === correctNumber){
            console.log(`Você acertou, o número correto era ${correctNumber}, você precisou de ${attempts} tentativas para acertar.`);
        } else {
            console.log('Errou, tente novamente!');
        }
    
}