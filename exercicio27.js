/* 27.
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. 
Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.
*/

const prompt = require('prompt-sync')();

let V = [];

// Criando matriz M
let lines = 6;
let columns = 6;
let M = new Array(columns);
for (let i = 0; i < columns; i++) {
    M[i] = new Array(lines);
}

// Leitura do valor multiplicador
let multiplier = prompt(`Digite o multiplicador: `);

// Leitura dos valores da matriz M e multiplicação dos valores inseridos, incluindo-os no vetor V
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        M[i][j] = prompt(`Digite um valor para a posição [${[i]}][${[j]}] na matriz: `);
        V.push(M[i][j] * multiplier);
    }
}

console.log(V);
console.log(`O tamanho do vetor é ${V.length}.`)