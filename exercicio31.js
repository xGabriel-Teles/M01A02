/* 31. 
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. 
Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.
*/

const prompt = require('prompt-sync')();


const A = parseInt(prompt('Digite um número inteiro de 0 até 9: '));
let counter = 0;

// Criando matriz M 
let lines = 30;
let columns = 30;
let V = new Array(lines);
for (let i = 0; i < lines; i++) {
    V[i] = new Array(columns);
}
// Gerando os números de forma aleatória para a matriz
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        V[i][j] = parseInt(Math.random() * 10);
    }
}

let X = new Array(lines);
for (let i = 0; i < lines; i++) {
    X[i] = new Array(columns);
}

// Percorrendo a matriz V
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {

        if (V[i][j] === A) {
            counter++
            continue;
        } else {
            X[i][j] = V[i][j];
        }
    }
}
console.log('\nMatriz V');
console.table(V);
console.log('\nMatriz X')
console.table(X);
console.log(`\nPossuem ${counter} números iguais a A na matriz V.`)