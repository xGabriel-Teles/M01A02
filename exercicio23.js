/* 23. 
Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.
*/

let lines = 7; 
let columns = 7; 
let MI = new Array(columns); 
for (let i = 0; i < columns; i++) {
	MI[i] = new Array(lines); 
}

for (let i = 0; i < MI.length; i++){
    for(let j = 0; j < MI.length; j++){
        if(MI[i] === MI[j]){
            MI[i][j]= 1;
        } else {
            MI[i][j]= null;
        }
    }
}

console.table(MI);
