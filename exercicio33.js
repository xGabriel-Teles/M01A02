/* 33. 
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

const prompt = require('prompt-sync')();

// Criando matriz M 
let lines = 3;
let columns = 3;
let M = new Array(lines);
for (let i = 0; i < lines; i++) {
    M[i] = new Array(columns);
}

// Gerando os números de forma aleatória para a matriz
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        // M[i][j] = parseInt(prompt(`Adicione um número para a posição [${i}][${j}]`));
        M[i][j] = parseInt(Math.random() * 10);
    }
}

console.log('\nA matriz antes da multiplicação é: ');
console.table(M);

let averageSecondaryDiagonal = (M[0][2] + M[1][1] + M[2][0]) / 3;

// Percorrendo a matriz
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {

        if (i === j) {
            M[i][j] = (M[i][j] * averageSecondaryDiagonal).toFixed(2);
        }
    }
}

console.log('\nA matriz após a multiplicação é: ');
console.table(M);