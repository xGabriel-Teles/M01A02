/* 25. 
Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.
*/

let lines = 15; 
let columns = 20; 
let M = new Array(lines); 
for (let i = 0; i < lines; i++) {
	M[i] = new Array(columns).fill(0); 
}

console.table(M)