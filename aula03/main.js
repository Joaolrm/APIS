// console.log("Hello World")

let produto = {
    id: 1
    ,nome:"Produto 1"
};

produto.categoria = "alimento";

produto.preco = 30;

produto.imprimirId = function (){
    console.log("ID:", this.id);
};

produto.imprimirId()

// console.log(produto)

function imprimir(produto) {
    console.log(produto);
};

const soma = function (val1, val2){
    return val1+val2;
};

console.log(soma(1, 2))

const carro = new Object();
carro.nome = "Gol";
carro.marca = "VW";
console.log(carro);

class Carro {
    constructor(nome, marca){
        this.nome = nome;
        this.marca = marca;
    }
    imprimir () {
        console.log(this);
    }
}

let carro1 = new Carro("Uno", "Fiat");
carro1.imprimir();

let meuArray = ['abacaxi', 'bergamota', 'caqui'];
console.log(meuArray);
console.log(meuArray[1]);
for(let i=0; i < meuArray.length; i++){
    console.log(meuArray[i]);
}

for (let ind in meuArray){
    console.log(meuArray[ind]);
}

for(let fruta of meuArray){
    console.log(fruta);
}

// teste