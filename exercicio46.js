/* 46.
Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor.
Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.
*/

function totalSales(sales) {
    let totalSales = {};

    sales.forEach(sale => {
        let seller = sale.seller;
        let value = sale.value;
    
        if (totalSales[seller]) {
          totalSales[seller] += value;
        } else {
          totalSales[seller] = value;
        }
    })

    return totalSales;
}

let sales = [
    {
        seller: 'Jão',
        value: 200
    },
    {
        seller: 'Marta',
        value: 400
    },
    {
        seller: 'Jão',
        value: 100
    },
    {
        seller: 'Jão',
        value: 100
    },
    {
        seller: 'José',
        value: 220
    },
];

console.log(totalSales(sales));