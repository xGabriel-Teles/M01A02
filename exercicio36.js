/* 36. 
Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva.
Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. 
Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. 
Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
*/

let G = new Array(13).fill(0);

function randomNumber() {
    let answers = new Array(13).fill(0);

    for (let i = 0; i < answers.length; i++) {
        let number = Math.floor(Math.random() * 20);
        if (answers.includes(number)) {
            i--
        } else {
            answers[i] = number;
        }
    }
    return answers; 
}

for (let i = 0; i < G.length; i++) {
    let randomNumber = Math.floor(Math.random() * 20)
    if (G.includes(randomNumber)) {
        i--
    } else {
        G[i] = randomNumber;
    }
}

console.log(`\nOs números sorteados na loteria esportiva foram: ${G}`);
console.log();

for (let gambler = 1; gambler <= 100; gambler++) {
    
    let hits = 0;
    numberCard = gambler;

    let answers = randomNumber()

    for (let i = 0; i < G.length; i++){
        if (G.includes(answers[i])){ 
            hits++
        }
    }
    if (hits === 13) {
        console.log(`Parabéns jogador do cartão de identificação ${numberCard}, tu foi o GANHADOR!`);
    } else {
        console.log(`Tente novamente, o jogador do cartão de identificação ${numberCard} você acertou ${hits} números.`);
    }
}

