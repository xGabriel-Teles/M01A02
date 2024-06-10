/* 35. 
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares.
O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. 
Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.
*/

// Criando vetores
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < 30; i++) {
    let randomNumber = parseInt(Math.random() * 10 + 1);
    if (randomNumber % 2 === 0) {
        if (evenNumbers.length < 5){
            evenNumbers.push(randomNumber);
        } else {
            console.log(`Vetor de números pares: ${evenNumbers}`);
            evenNumbers = []
            evenNumbers.push(randomNumber);
        }
    } else {
        if (oddNumbers.length < 5){
            oddNumbers.push(randomNumber);
        } else {
            console.log(`Vetor de números ímpares: ${oddNumbers}`);
            oddNumbers = []
            oddNumbers.push(randomNumber);
        }
    }
}
console.log(`Vetor de números pares: ${evenNumbers}`);
console.log(`Vetor de números ímpares: ${oddNumbers}`);