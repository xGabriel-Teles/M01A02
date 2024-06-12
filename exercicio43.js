/* 43.
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, 
onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.
*/

function combineObjects(object1, object2) {
    
    const combinedObj = {};

    for (const key in object1) {
        if (object1.hasOwnProperty(key)) {
            combinedObj[key] = object1[key];
        }
    }

    for (const key in object2) {
        if (object2.hasOwnProperty(key)) {
            combinedObj[key] = object2[key];
        }
    }
    return combinedObj;
}
let object1 = {
    id: 1, 
    name: 'Gabriel', 
    age: 27
};
let object2 = { 
    name: 'Jão', 
    age: 30, 
    active: true,
};

let combined = combineObjects(object1, object2);

console.log(combined);