/* 41. 
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade.
Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
*/

// Declarando o objeto pessoa;
let person = {
    name: 'Jão',
    age: 22,

}
// Imprimindo o valor de idade;
console.log(`Idade: ${person.age}.`)

// Adicionando a propriedade e-mail ao objeto pessoa;
person.email = 'email@email.com.ui'

// Imprimindo o objeto após o e-mail ser adicionado;
console.log('Objeto completo após modificação:', person)