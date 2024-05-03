/*2. 
Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh-1,
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require('prompt-sync')();

function penaltyCalculation(speed) {
    // Limite de velocidade permitida
    let permittedSpeed = 80;
    
    if (speed > permittedSpeed) {
        // Valor cobrado por cada Km acima da velocidade permitida
        let speedExceededvalue = 5;

        // Cálculo da velocidade excedida sobre o máximo permitido
        let speedExceeded = speed - 80;

        // Cálculo do valor da multa
        let penaltyValue = (speedExceeded * speedExceededvalue).toFixed(2);

        console.log(`\nVocê ultrapassou a velocidade permitida e foi multado em R$${penaltyValue}`)
        console.log('========================================================================');
    } else {
        console.log('Você não ultrapassou a velocidade permitida.')
        console.log('========================================================================');
    }
}

console.log('========================================================================');
let speed = prompt("Qual a velocidade que o carro passou em km/h? ");
penaltyCalculation(speed);
