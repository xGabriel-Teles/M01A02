/* 30.
Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. 
Escrever a matriz e os vetores criados.
*/

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
let SL = new Array(lines).fill(0);
let SC = new Array(columns).fill(0);

// Percorrendo a matriz
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {

        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

console.table(M);
console.log(`\nA soma de cada linha da matriz, com sua respectiva posição é ${SL}.`);
console.log(`A soma de cada coluna da matriz, com sua respectiva posição é ${SC}.`);
console.log();