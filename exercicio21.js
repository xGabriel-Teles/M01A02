/*21. 
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. 
Para homens, calcular o peso ideal usando a fórmula: 
peso ideal= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/
const prompt = require('prompt-sync')();

function calcIdealWeight(weight, gender) {
    if (gender === 'M') {
        return (72.7 * weight - 58).toFixed(2);
    } else if (gender === 'F') {
        return (62.1 * weight - 44.7).toFixed(2);
    }
}

let validation = true;
let gender;

console.log('========================================================================');
let weight = parseFloat(prompt('Digite sua altura (ex: 1.80): '));
while (validation) {
    gender = prompt('Digite seu gênero (F ou M): ').toUpperCase();
    if (gender === 'M' || gender === 'F') {
        validation = false;
    } else {
        console.log('Opção inválida, digite novamente.')
    }
}

console.log(`\nO peso ideal para você é ${calcIdealWeight(weight, gender)}kg`);
console.log('========================================================================');
