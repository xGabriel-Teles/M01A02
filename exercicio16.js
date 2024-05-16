/*16. 
Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. 
Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
 */

let numbers = [];

for (let i = 0; i < 20; i++) {
    numbers.push(parseInt(Math.random()*100));
}

console.log(`Números: ${numbers.join(', ')}.`);
console.log(`Números ordenados: ${numbers.sort(function(a, b){
    return a - b;
}).join(', ')}.`);