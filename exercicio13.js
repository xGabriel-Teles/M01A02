/*13. 
Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) 
um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.
 */

let fibonacciSequence = [1,1]

for (let i = 0; i < 13 ; i++){
    let f1 = fibonacciSequence[0 + i];
    let f2 = fibonacciSequence[1 + i];
    fibonacciSequence.push(f1 + f2);
}
console.log(fibonacciSequence);