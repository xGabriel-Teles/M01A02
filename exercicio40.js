/* 40. 
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto.
A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial.
(Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
*/

let officialResult = randomNumber();
let bettors = 50;
let bets = new Array(bettors);
let hits = 0;


function randomNumber() {
    let answers = new Array(5).fill(0);

    for (let i = 0; i < answers.length; i++) {
        let number = Math.floor(Math.random() * 20);
        if (answers.includes(number)) {
            i--
        } else {
            answers[i] = number;
        }
    }
    // Ordenando o vetor;
    answers.sort(function (a, b) {
        return a - b;
    });

    return answers;
}

function compareArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log("\nResultado Oficial: ", officialResult);

for (let i = 0; i < bettors; i++) {
    bets[i] = randomNumber();
}

for (let i = 0; i < bettors; i++) {
    if (compareArrays(bets[i], officialResult)) {
        console.log(`O ganhador foi o jogador ${i + 1}!`);
    }
}