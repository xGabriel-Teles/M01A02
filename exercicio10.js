/* 10.
Crie um programa usando a estrutura “faça enquanto” que leia vários números. 
A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares.
*/

const prompt = require('prompt-sync')();

let number;
let numbers = [];
let exit;

let sumNumbers = 0;
let pairCounter = 0;

do {
    number = parseInt(prompt('Digite um número: '));
    numbers.push(number)
    console.log('\nEscreva "sim" para encerrar o loop')
    exit = prompt('Deseja sair?  ').toLowerCase();
} while (exit !== 'sim');

    // a) O somatório entre todos os valores;
    for (let i = 0; i < numbers.length; i++){
        sumNumbers += numbers[i];
    }
 
    // b) Qual foi o menor valor digitado;
    for (let i = 0; i < numbers.length; i++){
        smallestNumber = Math.min(...numbers);
    }

    // c) A média entre todos os valores;
        let average = sumNumbers / numbers.length;

    // d) Quantos valores são pares.
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            pairCounter++
        }
    }

console.log(`\nA soma dos números é ${sumNumbers}.`);
console.log(`O menor número digitado é ${smallestNumber}.`);
console.log(`A média dos números é ${average.toFixed(1)}.`);
console.log(`Dentre os números digitados, ${pairCounter} são pares.`);