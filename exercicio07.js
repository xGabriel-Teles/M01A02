/* 7. 
Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. 
Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. 
No final, mostre o preço a ser pago de acordo com os dados a seguir: 

Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')();

let pricePerDay;
let priceKm;

function calcPriceTotal(pricePerDay, rentalDays, distanceTraveled, priceKm){
    
    let priceTotal = (pricePerDay * rentalDays) + (distanceTraveled * priceKm);
    return priceTotal.toFixed(2);
}
console.log('========================================================================');
console.log('Escolha o tipo de carro que deseja alugar.')
let typeCar = prompt('Digite 1 para carro popular e 2 para carro de luxo: ');

if (typeCar == 1 || typeCar == 2){
    let rentalDays = parseInt(prompt('Digite quantos dias de aluguel: '));
    let distanceTraveled = parseInt(prompt('Digite quantos Km foram percorridos: '));
    
    switch (typeCar) {
        case '1':
            pricePerDay = 90;
            distanceTraveled <= 100 ? priceKm = 0.20 : priceKm = 0.10;
            console.log(`\nO preço total a ser pago é R$${calcPriceTotal(pricePerDay, rentalDays, distanceTraveled, priceKm)}.`);
            console.log('========================================================================');
            break;
        case '2':
            pricePerDay = 150;
            distanceTraveled <= 100 ? priceKm = 0.30 : priceKm = 0.25;
            console.log(`\nO preço total a ser pago é R$${calcPriceTotal(pricePerDay, rentalDays, distanceTraveled, priceKm)}.`);
            console.log('========================================================================');
            break;
    }
} else {
    console.log('Número digitado para seleção do veículo inválido.');
}