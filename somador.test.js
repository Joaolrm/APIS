const somador = require('./somador');

test('2 + 2 é igual a 4', () =>{
    expect(somador.somar(2, 2)).toBe(4);
}
)