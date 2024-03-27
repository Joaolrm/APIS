let listaProdutos = [
    {
        id: 1
        ,nome: "arroz"
        ,categoria: "alimento"
        ,preco: 5.80
    }
    ,{
        id: 2
        ,nome: "leite"
        ,categoria: "bebida"
        ,preco: 4.25
    }
];

let idGenerador = 2;

function listar(){
    return listaProdutos;
}

function inserir(produto){
    produto.id = idGenerador++;
    listaProdutos.push(produto);
}

function main(){
    console.log(listar());
    inserir({
        nome: "Feijão"
        ,categoria: "alimento"
        ,preco: 8.00
    });
    inserir({
        nome: "Suco de laranja"
        ,categoria: "bebida"
        ,preco: 9.20
    });
    console.log(listar());
}

main();