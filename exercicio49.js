/* 49.
Você recebe um array de objetos representando transações financeiras. 
Cada transação possui id, valor, data, e categoria. 
Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria.
Adicionalmente, inclua um subtotal de valores por categoria.
*/

let transactions = [
    {
        id: 1,
        value: 200,
        date: '13/06/2024',
        category: 'alimentacao'
    },
    {
        id: 2,
        value: 300,
        date: '11/06/2024',
        category: 'combustivel'
    },
    {
        id: 3,
        value: 100,
        date: '04/06/2024',
        category: 'alimentacao'
    },
    {
        id: 4,
        value: 300,
        date: '01/06/2024',
        category: 'alimentacao'
    },
    {
        id: 5,
        value: 300,
        date: '11/06/2024',
        category: 'combustivel'
    }
];

function newObject(transactions) {

    let newObject = {};

    transactions.forEach(transaction => {
        let category = transaction.category;
        let value = transaction.value;

        if (newObject[category]) {
            newObject[category].push(value);
        } else {
            newObject[category] = [value];
        }
    });

    return newObject;
}

console.log(newObject(transactions))