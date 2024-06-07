/* 26.
Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].
*/

let lines = 5;
let columns = 5;

// Criando matriz A;
let MA = new Array(lines);
for (let i = 0; i < lines; i++) {
	MA[i] = new Array(columns); 
}
// Criando matriz B;
let MB = new Array(lines);
for (let i = 0; i < lines; i++) {
	MB[i] = new Array(columns); 
}
// Criando a matriz produto P;
let MP = new Array(lines);
for (let i = 0; i < lines; i++) {
	MP[i] = new Array(columns).fill(0); 
}
// Gerando os números de forma aleatória para atribuir na matriz A e matriz B
for (let i = 0; i < lines; i++) {
	for (let j = 0; j < columns; j++) {
		MA[i][j] = parseInt(Math.random() * 10); 
        MB[i][j] = parseInt(Math.random() * 10); 

        // Atribuindo o valor da matriz produto P entre as matrizes A e B;
        MP[i][j] = MA[i][j] * MB[i][j];
	}
}
console.log('\nMatriz A: ');
console.log(MA);
console.log('\nMatriz B: ');
console.log(MB);
console.log('\nMatriz P: ');
console.log(MP);