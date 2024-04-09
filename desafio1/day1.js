//comparação boleana (===) compara os valores e tipos de dados da variável
console.log(false === '0'); //retorna false
console.log(null === undefined); //retorna false
console.log(" \t\r\n" === 0); //retorna false
console.log(' ' === 0); //retorna false
console.log(" ")

//variaveis 
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

    //condicional - comparação - var number igual var string
    if(numeroUm === stringUm){
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.')
    }else{
        console.log('As variáveis numeroUm e stringUm não tem o mesmo valor.')
    }
    //condicional - comparação - var number igual var string
    if(numeroTrinta === stringTrinta){
        console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.')
    }else{
        console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.')
    }
    //condicional - comparação - var number igual var string
    if(numeroDez === stringDez){
        console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.')
    }else{
        console.log('As variáveis numeroDez e stringDez não tem o mesmo valor.')
    }