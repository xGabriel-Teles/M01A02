/*18. 
Crie um registro com o nome do funcionário, cargo e salário. 
Leia este registro para um funcionário e ao final escreva o conteúdo do registro.
*/

const prompt = require('prompt-sync')();

function readEmployeeInformation() {
    let employee = {
        name: '',
        occupation: '',
        salary: 0,
    };
    console.log('========================================================================');
    employee.name = prompt('Digite o nome do funcionário: ');
    employee.occupation = prompt('Digite o cargo do funcionário: ');
    employee.salary = parseFloat(prompt('Digite o salário do funcionário: '));

    return employee;
} 
function showEmployeeInformation(employee) {
    console.log('\nInformações do Funcionário: ');
    console.log(`Nome: ${employee.name}`);
    console.log(`Cargo: ${employee.occupation}`);
    console.log(`Salário: R$${employee.salary.toFixed(2)}.`);
    console.log('========================================================================');
}
let employee = readEmployeeInformation();
showEmployeeInformation(employee);