/* 22. 
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos.
Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, 
a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$350,00.
*/

const prompt = require('prompt-sync')();

function main () {
    const salaries = [];
    const numberOfChildren = [];
    let quitProgram;
    let counter = 0;
    let averageSalary;
    let salariesAboveStandard = 0;
    
    do {
        salaries.push(parseFloat(prompt('Digite o salário do indivíduo: ')));
        numberOfChildren.push(parseInt(prompt('Digite o número de filhos desse indivíduo: ')));
        quitProgram = prompt('Digite "S" para continuar o programa ou aperte "ENTER" para encerrar.  ').toUpperCase();
        counter++
    } while (quitProgram === 'S')
    
    // MAIOR SALARIO
    let highestSalary = Math.max(...salaries);
    
    // MÉDIA SALARIAL & SALÁRIOS ACIMA DE R$350
    let sumSalaries = 0;
    for (let i = 0; i < salaries.length; i++) {
        sumSalaries += salaries[i];
        averageSalary = sumSalaries / counter;
    
        if (salaries[i] >= 350){
            salariesAboveStandard++
        }
    }
    
    // MÉDIA DE FILHOS
    let sumNumberOfChildren = 0;
    for (let i = 0; i < numberOfChildren.length; i++) {
        sumNumberOfChildren += numberOfChildren[i];
        averageNumberOfChildren = sumNumberOfChildren / counter;
    }
    
    console.log(`\nA média dos salários digitados é R$${averageSalary.toFixed(2)}, a média de número de filhos é ${averageNumberOfChildren.toFixed(2)}, o maior salário é R$${highestSalary.toFixed(2)} e ${salariesAboveStandard} pessoas possuem salários superiores à R$350,00, representando ${(salariesAboveStandard / counter * 100).toFixed(2)}% da quantidade de pessoas digitadas.`) 
    
}
main()