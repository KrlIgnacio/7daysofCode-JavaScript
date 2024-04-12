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
                rl.question('Digite a categoria do item (frutas, laticinios, congelados, doces, padaria, legumes, verduras, outros): ', (categoria) => {
                    categoria = categoria.toLowerCase();
                    if (listaCompras[categoria]) {
                        listaCompras[categoria].push(item);
                        console.log(`O item "${item}" foi adicionado à lista de ${categoria}.`);
                    } else {
                        console.log("Categoria inválida. O item não foi adicionado à lista.");
                    }

                    rl.question('Deseja remover algum item da lista? (s/n)', (respostaRemover) => {
                        if (respostaRemover.toLowerCase() === 's') {
                            rl.question('Digite o item que deseja remover: ', (itemRemover) => {
                                rl.question('Digite a categoria do item (frutas, laticinios, congelados, doces, padaria, legumes, verduras, outros): ', (categoriaRemover) => {
                                    categoriaRemover = categoriaRemover.toLowerCase();
                                    if (listaCompras[categoriaRemover] && listaCompras[categoriaRemover].length > 0) {
                                        let indice = listaCompras[categoriaRemover].indexOf(itemRemover);
                                        if (indice !== -1) {
                                            listaCompras[categoriaRemover].splice(indice, 1);
                                            console.log(`O item "${itemRemover}" foi removido da lista de ${categoriaRemover}.`);
                                            exibirListaCompras();
                                        } else {
                                            console.log(`O item "${itemRemover}" não existe na lista de ${categoriaRemover}.`);
                                        }
                                    } else {
                                        console.log(`A lista de ${categoriaRemover} está vazia ou a categoria é inválida.`);
                                    }
                                    adicionarItem();
                                });
                            });
                        } else {
                            exibirListaCompras();
                            adicionarItem();
                        }
                    });
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
