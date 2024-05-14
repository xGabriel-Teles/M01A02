/* 11. 
Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), 
mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
*/

const prompt = require('prompt-sync')();

let elementsPA = [];
let sumElements = 0;

console.log('========================================================================');
let firstNumber = parseInt(prompt('Digite o primeiro número da PA: '));
elementsPA.push(firstNumber);

if (isNaN(firstNumber - 1)) {
    console.log('Você não digitou um número.');
} else {
    let ratioNumber = parseInt(prompt('Digite a razão da PA: '));
    if (isNaN(ratioNumber - 1)) {
        console.log('Você não digitou um número.');
    } else {
        for (let i = 0; i < 9; i++) {
            elementsPA.push(firstNumber += ratioNumber);
        }
        for (let i = 0; i < elementsPA.length; i++) {
            sumElements += elementsPA[i];
        }
        console.log(`\nOs 10 primeiros números da PA são: ${elementsPA}.`);
        console.log(`A soma dos 10 primeiros números da PA é ${sumElements}.`);
        console.log('========================================================================');
    }
}

