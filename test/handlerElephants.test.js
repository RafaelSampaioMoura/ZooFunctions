const { default: test, it } = require('test');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    test('Nenhum parâmetro deve retornar undefined', () => {
        expect(handlerElephants()).toBeUndefined();
    })
});
