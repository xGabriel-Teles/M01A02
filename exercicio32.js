/* 32. 
Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha.
Escrever a matriz lida e a modificada.
*/

let absoluteGreatestLine = 0;

// Criando matriz M 
let lines = 12;
let columns = 13;
let M = new Array(lines);
for (let i = 0; i < lines; i++) {
    M[i] = new Array(columns);
}
// Gerando os números de forma aleatória para a matriz
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        M[i][j] = parseInt(Math.random() * 20 - 10);
    }
}
console.log('\nMatriz original:')
console.table(M)

// Percorrendo a matriz
for (let i = 0; i < lines; i++) {

    absoluteGreatestLine = Math.max(...M[i].map(Math.abs));

    for (let j = 0; j < columns; j++) {
        M[i][j] = (M[i][j] / absoluteGreatestLine).toFixed(2);
    }
}
console.log('\nMatriz modificada:')
console.table(M)