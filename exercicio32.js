/* 32. 
Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha.
Escrever a matriz lida e a modificada.
*/

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
        M[i][j] = parseInt(Math.random() * 10);
    }
}

console.table(M)