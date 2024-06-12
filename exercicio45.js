/* 45. 
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.
*/

let A = ['banana', 'pera', 'banana', 'melancia', 'jaca', 'jaca'];

let object = {};

A.forEach(string => {
    if (object[string]) {
        object[string]++;
    } else {
      object[string] = 1;
    }
  });

  console.log(object)