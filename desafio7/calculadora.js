const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//variaveis
let numero1;
let numero2;
let operacao;

//funcoes
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function end() {
  var mensagem = "Até breve! :)";
  console.log(mensagem);
  rl.close();
}

function calculadora() {
  rl.question("Escolha uma das operações: (+, -, *, /, 'end'): ", (operac) => {
    operacao = operac;
    if (operacao === "end") {
      end();
    } else {
      rl.question("Digite o primeiro valor: ", (valor1) => {
        numero1 = parseFloat(valor1); //valor flutuante

        rl.question("Digite o segundo valor: ", (valor2) => {
          numero2 = parseFloat(valor2);

          switch (operacao) {
            case "+":
              console.log(soma(numero1, numero2));
              calculadora();
              break;
            case "-":
              console.log(subtracao(numero1, numero2));
              calculadora();
              break;
            case "*":
              console.log(multiplicacao(numero1, numero2));
              calculadora();
              break;
            case "/":
              console.log(divisao(numero1, numero2));
              calculadora();
              break;
            default:
              console.log("Digite uma operação válida!");
              calculadora();
              break;
          }
        });
      });
    }
  });
}

console.log("Olá, essa é a minha calculadora em JavaScript!\n");
calculadora();
