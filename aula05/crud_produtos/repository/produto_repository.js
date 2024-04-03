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
    produto.id = ++idGenerador;
    listaProdutos.push(produto);
}

function buscarPorId(id) {
    for(let produto of listaProdutos){
        if(produto.id === id){
            return produto;
        }
    }
    // for(let i=0; i<listaProdutos.length; i++){
    //     if(listaProdutos[i].id === id){
    //         return listaProdutos[i];
    //     }
    // }
}

function atualizar(id, produtoAlterado) {
    let produto = buscarPorId(id);
    if (produto){
        produto.nome = produtoAlterado.nome;
        produto.categoria = produtoAlterado.categoria;
        produto.preco = produtoAlterado.preco;     
    }
}

function deletar (id){
    for(let i in listaProdutos){
        if (listaProdutos[i].id === id) {
            listaProdutos.splice(i, 1)
        }
    }
    
}

module.exports = {
    listar
    ,inserir
    ,buscarPorId
    ,atualizar
    ,deletar
}