/* 24.
 Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.
*/

let lines = 6; 
let columns = 8; 
let M = new Array(lines); 
let C = new Array(lines).fill(0);
for (let i = 0; i < lines; i++) {
	M[i] = new Array(columns); 
}
for (let i = 0; i < lines; i++){
    for(let j = 0; j < columns; j++){
        M[i][j] = parseInt(Math.random() * 100 - 50)
        if(M[i][j] < 0) {
            C[i]++
        }
    }
}

console.table(M);
console.table(C);