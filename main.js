const somador = require('./somador');

console.log(1, somador.somar(2, 2));
console.log(2, somador.somar(200, 200));
console.log(3, somador.somar(0, 200));
console.log(4, somador.somar(30, "200"));
console.log(5, somador.somar(-200, 200));
console.log(6, somador.somar(10000000000, 10000000000));

