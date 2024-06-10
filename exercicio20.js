/*20. 
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: 
existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. 
Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

const prompt = require('prompt-sync')();

let numOfEmployees = 80;
let registration = 0;
let name;
let grossSalary = 0;
let netSalary = 0;

for (let i = 1; i <= numOfEmployees; i ++){
    registration = i;
    name = prompt('Digite o nome do funcionário: ');
    grossSalary = parseFloat(prompt('Digite o salário bruto do funcionário: '))
    netSalary = grossSalary * 0.88;


    console.log(`\nMatrícula: ${registration} \nNome: ${name} \nSalário bruto: R$${grossSalary.toFixed(2)} \nDedução INSS: R$${(grossSalary - netSalary).toFixed(2)} \nSalário líquido: R$${netSalary.toFixed(2)}\n`)
}
