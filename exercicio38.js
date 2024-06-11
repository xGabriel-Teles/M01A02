/* 38. 
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta
variável:
    1- soma dos elementos;
    2- produto dos elementos;
    3- média dos elementos;
    4- ordene os elementos em ordem crescente;
    5- mostre o vetor.
*/
const prompt = require('prompt-sync')();

let V = new Array(6);

for (let i = 0; i < 6; i++) {
    V[i] = parseInt(prompt(`Digite o ${i + 1}º número: `));
}
let identifier = prompt('Digite o número identificador entre 1 e 5: ')

let sum = 0;

switch (identifier) {
    case '1':
        for (let i = 0; i < V.length; i++) {
            sum += V[i];
        }
        console.log(`\nA soma dos elementos do vetor é: ${sum}`);
        break
    case '2':
        let product = V[0] * V[1] * V[2] * V[3] * V[4] * V[5];
        console.log(`\nO produto dos elementos do vetor é: ${product}`);
        break
    case '3':
        for (let i = 0; i < V.length; i++) {
            sum += V[i];
        }
        let average = sum / 6;
        console.log(`\nA média dos elementos do vetor é: ${average}`);
        break
    case '4':
        V.sort(function(a, b) {
            return a - b;
          });
          console.log(`\nO vetor ordenado em ordem crescente é: ${V}`);
        break
    case '5':
        console.log(`\nO vetor é: ${V}`);
        break
}

