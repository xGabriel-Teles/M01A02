/* 25. 
Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.
*/

let lines = 15;
let columns = 20;
let sumColumns = new Array(columns).fill(0);

// Criando Array
let M = new Array(lines);
for (let i = 0; i < lines; i++) {
	M[i] = new Array(columns); 
}

// Gerando os números de forma aleatória para o Array
for (let i = 0; i < lines; i++) {
	for (let j = 0; j < columns; j++) {
		M[i][j] = parseInt(Math.random() * 10); 
	}
}
// Lógica implementada para somar cada coluna, sendo a a soma da coluna X representada pela mesma posição na matriz sumColumns
for (let i = 0; i < columns; i++) {
	for (let j = 0; j < M.length; j++) {
		sumColumns[i] += M[j][i];
	}
	console.log(`A soma da coluna (posição ${i}) é:  ${sumColumns[i]}`)
}
console.log('')
console.table(M);
// console.table(sumColumns);