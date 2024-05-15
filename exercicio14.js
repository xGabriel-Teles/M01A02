/*14. 
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. 
No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
*/

const prompt = require('prompt-sync')();

let names = [];
let reversedNames = [];

console.log('========================================================================');
for (let i = 0; i < 7; i++) {
    let name = prompt('Digite o nome para ser adicionado ao vetor: ');
    names.push(name); 
    reversedNames.unshift(name);
}

console.log(`\nOs nomes na ordem que foram adicionados são: ${names.join(', ')}.`);
console.log(`Os nomes na ordem inversa que foram adicionados são: ${reversedNames.join(', ')}.`);
console.log('========================================================================');