/* 9. 
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. 
No final, mostre o total de salário pago aos homens e o total pago às mulheres. 
O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/

const prompt = require('prompt-sync')();

let menSalary = 0;
let womenSalary = 0;
let menCounter = 0;
let womenCounter = 0;
let registerNewEmployee;

console.log('================================================================================================================');
do {
    let employeeSalary = parseInt(prompt('Qual o salário do funcionário? '));
    let employeeSex = prompt('Qual o sexo do funcionário? (Digite "M" para masculino e "F" para feminino)  ').toUpperCase();

    if (employeeSex === 'M'){
        menSalary += employeeSalary;
        menCounter++
    } else if (employeeSex === 'F'){
        womenSalary += employeeSalary;
        womenCounter++
    } else {
        console.log('Você não digitou o sexo corretamente.')
    }

    registerNewEmployee = prompt('Digite "SIM" para encerrar o programa e exibir o resultado, qualquer outra resposta continuará o programa.  ').toUpperCase();

} while (registerNewEmployee !== 'SIM');

console.log(`\nForam registrados ${menCounter} funcionários do sexo masculino, o valor total de salário pago para eles é R$${menSalary.toFixed(2)}.`)
console.log(`Foram registrados ${womenCounter} funcionários do sexo feminino, o valor total de salário pago para elas é R$${womenSalary.toFixed(2)}.\n`)
console.log('================================================================================================================');