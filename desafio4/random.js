//escopo variaveis 
let numeroDefinido = Math.floor(Math.random() * 10) + 1; //random
let tentativas = 0;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Digite um número entre 1 e 10:");
rl.on('line', (input) => {
    let numeroJogador = parseInt(input);
    //loop
    while (tentativas < 3 && numeroJogador !== numeroDefinido) {
        if (isNaN(numeroJogador) || numeroJogador < 1 || numeroJogador > 10) {
            console.log("Digite um número válido entre 1 e 10.");
        } else {
            console.log("Número errado. Tente novamente;");
            tentativas++;
        }
        if (tentativas < 3) {
            console.log("Digite um número entre 1 e 10:");
        } else {
            console.log(`Você concluiu as tentativas, o número era ${numeroDefinido}.`);
            rl.close();
        }
        break; //encera o loop
    }

    if (numeroJogador === numeroDefinido) {
        console.log(`Parabéns, você acertou o número! - Número Definido = ${numeroDefinido}.`);
        rl.close();
    }
});
