/* 3. 
Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km.
Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/

const prompt = require('prompt-sync')();

function priceCalculation(distance) {
    let priceKm;

    // Condicional para verificar o preço do Km
    distance <= 200 ? priceKm = 0.50 : priceKm = 0.45;

    // Calculo do preço total, multiplicando a distância digitada pelo usuário pelo valor do Km
    priceTotal = (priceKm * distance).toFixed(2);

    return priceTotal;
}

console.log('========================================================================');
let distance = prompt('Qual a distância em km você deseja percorrer? ');
console.log(`\nO preço da passagem será R$${priceCalculation(distance)}.`);
console.log('========================================================================');