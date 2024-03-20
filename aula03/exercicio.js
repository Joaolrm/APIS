let produtos = [];
let proximoId = 1;

function inserirProduto(nome, categoria, preco) {
    const produto = {
        id: proximoId++,
        nome: nome,
        categoria: categoria,
        preco: preco
    };
    produtos.push(produto);
    return produto;
}

function listarProdutos() {
    return produtos;
}

function buscarProdutoPorId(id) {
    return produtos.find((produto) => produto.id === id);
}

inserirProduto("Camiseta", "Roupas", 29.99);
inserirProduto("Mouse", "Eletronicos", 29.99);
inserirProduto("Livro", "Livros", 29.99);

console.log(listarProdutos());

const produtoEncontrado = buscarProdutoPorId(1);
console.log(produtoEncontrado);
