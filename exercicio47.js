/* 47.
Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, 
retornando um novo objeto com os resultados.
*/

function transformObject(obj, transformFunc) {
    
    const result = {};
  
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        result[key] = transformFunc(obj[key]);
    }
};
    return result;
};

function transformFunc(x) {
    return x * 2;
};
  
let originalObject = {
    a: 2,
    b: 4,
    c: 6
};
  
let newObject = transformObject(originalObject, transformFunc);
console.log(newObject);