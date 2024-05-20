/*19.
Escrever um programa para ler 5 horários. 
Validar cada horário fornecendo através de repetição. 
Escrever cada um deles no formato HH.MM.SS.
*/

function getTimetable() {
    let x = new Date();
    let hours = x.getHours();
    let min = x.getMinutes();
    let seconds = x.getSeconds();

    console.log(`${hours}:${min}:${seconds}.`)
}
for (let i = 1; i < 6; i++) {
    setTimeout(getTimetable, i*1000)
}

/*  Professor Jaques, caso leia esse comentário, utilizei o setTimeout apenas pra não ficar 5 vezes o mesmo horário no prompt, assim ele executa 5x o loop, 
    cada volta adicionando 1 segundo a mais na chamada da função. 
*/