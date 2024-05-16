/*15. 
Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. 
No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
*/

const prompt = require('prompt-sync')();

const numbers = [];

console.log('========================================================================');
for (let i = 0; i < 10; i ++){
    let number = parseInt(prompt('Digite o número para ser adicionado ao vetor: '));
    if (isNaN(number - 1)) {
        console.log('Você não digitou um número');
        i--;
    } else {
        numbers.push(number);
    }
} 
console.log('');
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 2 === 0) {
        console.log(`O número ${numbers[j]} é um número par e está armazenado na posição ${j} do vetor.`)
    }
}
console.log('========================================================================');