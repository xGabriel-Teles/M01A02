/* 29. 
Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    a) da linha 4 de M;
    b) da coluna 2 de M;
    c) da diagonal principal;
    d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/


let sumLineFour = 0;
let sumColumnTwo = 0;
let diagonalSum = 0;
let sumTotal = 0;

// Criando matriz M 
let lines = 5;
let columns = 5;
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
// Percorrendo a matriz
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {

        // Soma dos valores da diagonal principal;
        if (i === j) {
            diagonalSum += M[i][j];
        }

        // Soma da linha 4;
        if (j === 3) {
            sumLineFour += M[i][j];
        }

        // Soma da coluna 2;
        if (i === 1) {
            sumColumnTwo += M[i][j];
        }

        // Soma do total
        sumTotal += M[i][j];
    }
}


console.table(M);
console.log(`\nA soma dos valores da diagonal principal é:  ${diagonalSum}.`);
console.log(`A soma dos valores da coluna dois é:  ${sumColumnTwo}.`);
console.log(`A soma dos valores da linha quatro é:  ${sumLineFour}.`);
console.log(`A soma de todos os valores da matriz é:  ${sumTotal}.`);
console.log()