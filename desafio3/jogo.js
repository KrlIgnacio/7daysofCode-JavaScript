//para ler input do usuario pelo console
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//escopo de variaveis
let fullstack;
let tecnologia;
let areaTi;
let tecnologias = [];
let tecnologiaAtual;

function carreiraTec(){
    rl.question("Desejas seguir carreira ou se desenvolver um profissional Full-Stack? - Responda com 'N' ou 'S':  ", (resposta) => {
        fullstack = resposta.toLowerCase();
        if(fullstack === 's'){
            console.log("Legal, uma boa carreira!");
        }else if (fullstack === 'n'){
            console.log("Ser especialista em algo é grandioso!");
        }else{
            console.log("Resposnda com 'N' ou 'S'")
        }
        tec();
    });
}
//function que funciona como um loop com flag!
function tec(){
    rl.question("Digite e aperte Enter: Quais são as tecnologias que quer aprender? (0 p/ sair do loop)", (resposta) =>{
        tecnologiaAtual = resposta;

        if(tecnologiaAtual !== '0'){
            tecnologias.push(tecnologiaAtual);
            tec();
        }else{
            if(tecnologias.length > 0){
                console.log("Tecnologias escolhidas: ");
                tecnologias.forEach((tec) => {
                    console.log(tec);
                });
            }
            rl.close();
        }
    });
    
}


console.log("Desejas seguir carreira Front-End ou Back-End?\n");
rl.question("Digite 1 para Front-End ou 2 para Back-End? \n", (resposta) => {
    areaTi = resposta;

    switch (areaTi) {
        case '1':
            rl.question("Quer aprender React ou Vue? ", (resposta) => {
                tecnologia = resposta.toLowerCase();
                if(tecnologia != 'react' && tecnologia != 'vue'){
                    console.log("Favor responder React ou Vue.");
                }else{
                    console.log(`Você escolheu aprender ${tecnologia}`);
                    carreiraTec(); 
                }
            });
            break;
        case '2':
            rl.question("Quer aprender Java ou C#? ", (resposta) => {
                tecnologia = resposta.toLowerCase();
                if(tecnologia != 'java' && tecnologia != 'c#'){
                    console.log("Favor responder Java ou C#.");
                }
                else{
                    console.log(`Você escolheu aprender ${tecnologia}`);
                    carreiraTec();
                } 
            });
            break;
        default:
            rl.question("Escolha um valor válido (1 ou 2)");
             rl.close();
            break;
    }
});
