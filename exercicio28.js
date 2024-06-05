/* 28.
Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
    a) a soma dos elementos acima da diagonal principal;
    b) a soma dos elementos abaixo da diagonal principal;
*/

let aboveMainDiagonal = 0;
let belowMainDiagonal = 0;

// Criando matriz M 
let lines = 10;
let columns = 10;
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
// Somando valores acima da diagonal principal e abaixo da diagonal principal
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
        if (i < j) {
            aboveMainDiagonal += M[i][j];
        }
        if (i > j) {
            belowMainDiagonal += M[i][j];
        }
    }
}
console.table(M)
console.log(`\nA soma dos valores acima da diagonal principal é: ${aboveMainDiagonal}.`)
console.log(`A soma dos valores abaixo da diagonal principal é: ${belowMainDiagonal}.`)
console.log()