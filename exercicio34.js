/* 34.
Faça um algoritmo que leia uma matriz 50 x 50 de números reais. 
A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.
*/

// Criando matriz M 
let lines = 50;
let columns = 50;
let M = new Array(lines);
for (let i = 0; i < lines; i++) {
    M[i] = new Array(columns);
}
// Gerando os números de forma aleatória para a matriz
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        M[i][j] = parseInt(Math.random() * 10);
    }
}
console.log('\nMatriz original: ')
console.table(M)

let mainDiagonalNumber = 0;

// Percorrendo a matriz
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        if (i === j){
            mainDiagonalNumber = M[i][j];
            for (let j = 0; j < columns; j++){
                M[i][j] = M[i][j] * mainDiagonalNumber;
            }
        }
    }
}

console.log('\nMatriz após a multiplicação: ')
console.table(M)