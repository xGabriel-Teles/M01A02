/* 1. 
Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. 
Calcule quantos dias de vida um fumante perderá e exiba o total em dias. 
*/

const prompt = require('prompt-sync')();

function lifespanReduction (cigarettes, smokingTime){
    // Tempo de vida perdido por cada cigarro fumado
    let lifeLostPerCigarette = 10;

    // Tempo de vida perdido por cada dia fumado
    let lifeLostSmokedPerDay = lifeLostPerCigarette * cigarettes;

    // Conversão do tempo fumado de anos para dias
    let smokedDays = parseInt(smokingTime * 365);

    // Tempo de vida perdido em minutos
    let totalMinutesLostLife = lifeLostSmokedPerDay * smokedDays;

    // Conversão do tempo fumado de  minutos para horas
    let totalHoursLostLife = totalMinutesLostLife / 60;

    // Conversão do tempo fumado de horas para dias, arredondado o número inteiro mais próximo
    let totalDaysLostLife = Math.round(totalHoursLostLife/24);

    return totalDaysLostLife
}   
console.log('========================================================================');
let cigarettes = prompt("Quantos cigarros você fuma por dia? ");
let smokingTime = prompt("Você é fumante a quantos anos? ");

console.log(`\nVocê perderá aproximadamente ${lifespanReduction(cigarettes, smokingTime)} dias em sua vida, então pare de fumar!`);
console.log('========================================================================');
