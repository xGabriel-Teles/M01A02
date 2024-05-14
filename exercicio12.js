/*12. 
Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. 
*/

let fibonacciSequence = [1,1]

for (let i = 0; i < 8 ; i++){
    let f1 = fibonacciSequence[0 + i];
    let f2 = fibonacciSequence[1 + i];
    fibonacciSequence.push(f1 + f2);
}
console.log(`\nOs 10 primeiros elementos da Sequência de Fibonacci são: ${fibonacciSequence}.`);