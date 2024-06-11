/* 42.
Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays.
Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
*/

let data = {
    name: 'Jão',
    age: 30,
    hobbies: ['futebol', 'leitura', 'games'],
    address: {
        street: 'Rua Principal',
        number: 123
    },
    phones: ['99999-9999', '3434-3434'],
    active: true,
};

let result = {};

for (let i in data) {
    if (Array.isArray(data[i])) {
        result[i] = data[i];
    }
}

console.log(result)