
function enviar(){

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let linguagem = document.getElementById('linguagem').value;
    
    let mensagem =  `Olá ${nome}, você tem ${idade} anos e já está estudando ${linguagem}!`;
    alert(mensagem);

    return true;
}


