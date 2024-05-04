/* 4. 
Crie um programa que leia o tamanho de três segmentos de reta. 
Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/

const prompt = require('prompt-sync')();

console.log('========================================================================');
let lineOne = parseInt(prompt('Digite o comprimento da primeira reta: '));
let lineTwo = parseInt(prompt('Digite o comprimento da segunda reta: '));
let lineThree = parseInt(prompt('Digite o comprimento da terceira reta: '));

(function (a, b, c){
    if (a + b > c && b + c > a && a + c > b) {
        console.log('\nÉ possível formar um triângulo com os valores informados para cada reta!');
        console.log('========================================================================');
    } else {
        console.log('\nNão é possível formar um triângulo com os valores informados para cada reta!');
    };
})(lineOne, lineTwo, lineThree);






