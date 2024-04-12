const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let listaCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    padaria: [],
    legumes:[],
    verduras: [],
    outros: []
};

function exibirListaCompras() {
    console.log('Lista de Compras:');
    for (let categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            console.log(`\t${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCompras[categoria].join(', ')}`);
        }
    }
}

function adicionarItem() {
    rl.question("\nDeseja adicionar itens à lista de compras? Digite 's' para sim ou 'n' para não: ", (resposta) => {
        if (resposta.toLowerCase() === 's') {
            rl.question('\nDigite o item que deseja comprar: ', (item) => {
                rl.question('Digite a categoria do item (frutas, laticinios, congelados, doces, padaria, outros): ', (categoria) => {
                    categoria = categoria.toLowerCase();
                    if (listaCompras[categoria]) {
                        listaCompras[categoria].push(item);
                        console.log(`O item "${item}" foi adicionado à lista de ${categoria}.`);
                    } else {
                        console.log("Categoria inválida. O item não foi adicionado à lista.");
                    }
                    adicionarItem(); 
                });
            });
        } else if (resposta.toLowerCase() === 'n') {
            exibirListaCompras();
            rl.close();
        } else {
            console.log('Resposta inválida. Por favor, responda com "s" para continuar ou "n" para finalizar.');
            adicionarItem(); 
        }
    });
}

adicionarItem(); 
