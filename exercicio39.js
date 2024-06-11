/* 39. 
Faça um algoritmo que leia um vetor (A) de 100 posições. 
Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

let A = new Array(50);
let B = new Array();

for (let i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 100 - 50)
}
for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
        B.push(A[i]);
    }
}

console.log('\nVetor original: ')
console.log(A);
console.log('\nVetor compactado (sem números nulos ou negativos): ')
console.log(B);