/* 44.
Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.
*/


function propertyCounter(object) {
    let counterString = 0;
    for (let prop in object) {
        if (object.hasOwnProperty(prop) && typeof object[prop] === 'string') {
            counterString++;
        }

    }
    return counterString;
}

let object1 = {
    name: 'Jão',
    lastName: 'Santos',
    age: 30,
    hobbies: ['futebol', 'leitura', 'games'],
    address: {
        street: 'Rua dos bobos',
        number: 0,
    },
    phones: ['99999-9999', '3434-3434'],
    active: true,
};

let counter = propertyCounter(object1);

console.log(`\nNo objeto declarado, há ${counter} propriedades do tipo string.`);
console.log();