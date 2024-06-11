/* 37. 
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. 
A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. 
Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

let totalQuestions = 20;
let totalStudents = 50;
let G = new Array(totalQuestions);

function randomAnswers() {
    let answers = new Array(totalQuestions);

    for (let i = 0; i < totalQuestions; i++) {
        let number = Math.floor(Math.random() * 2);

        if (number === 0) {
            answers[i] = 'F';
        } else {
            answers[i] = 'V';
        }
    }
    return answers;
}

G = randomAnswers();
console.log('O gabarito da prova é: ')
console.log(G)
console.log();

for (let i = 0; i < totalStudents; i++) {
    let student = 1 + i;
    let hits = 0;
    let answers = randomAnswers();

    for (let j = 0; j < totalQuestions; j++) {
        if (answers[j] === G[j]) {
            hits++
        }
    }

    if (hits >= 12) {
        console.log(`Parabéns! Aluno da matrícula ${student}, você acertou ${hits} respostas e está APROVADO.`)
    } else {
        console.log(`Que pena! Aluno da matrícula ${student}, você acertou ${hits} respostas e está REPROVADO.`)
    }
}
console.log();