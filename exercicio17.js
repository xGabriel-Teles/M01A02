/*17. 
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas.
No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
*/

const prompt = require('prompt-sync')();

let names = [];
let ages = [];
let minors = 0;

console.log('========================================================================');
for (let i = 0; i < 3; i++) {
    names[i] = prompt('Digite o nome da pessoa: ');
    ages[i] = prompt('Digite o idade da pessoa: ');
    
    if (ages[i] < 18) {
        minors++
    }

}

if (minors < 1) {
    console.log('\nNão há pessoas menores de idade na lista.')
} else {
    console.log('\nLista de pessoas menores de idade:');
    for (let i = 0; i < names.length; i++) {
        if (ages[i] < 18) {
            console.log(`Nome: ${names[i]} | Idade: ${ages[i]}.`)
        }
    }
}
console.log('========================================================================');