/* 48. 
Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB.
Cada chave é um item, e o valor é a quantidade desse item em estoque. 
Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

function combineObjects(obj1, obj2) {

    let inventoryTotal = {};

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            inventoryTotal[key] = obj1[key];
        }
    }

    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (key in inventoryTotal) {
                inventoryTotal[key] += obj2[key];
            } else {
                inventoryTotal[key] = obj2[key];
            }
        }
    }
    return inventoryTotal;
};

let StoreInventoryA = {
    televisao: 100,
    radio: 20,
    fone: 200,
    computador: 10,
    notebook: 10,
};

let StoreInventoryB = {
    televisao: 100,
    computador: 10,
    notebook: 10,
    mouse: 100,
    teclado: 100,
};

console.log(combineObjects(StoreInventoryA, StoreInventoryB));