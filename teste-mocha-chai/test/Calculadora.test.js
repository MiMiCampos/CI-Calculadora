const { expect } = require('chai');
const { somar, subtrair, dividir } = require('../src/models/Calculadora');

describe('Testes da Calculadora', () => {
    
    it('deve somar dois números', () => {
        const resultado = somar(2, 6);
        expect (resultado).to.equal(8);
    })

    it('deve subtrair dois números', () => {
        const resultado = subtrair(2, 7);
        expect (resultado).to.equal(-5);
    })

    it('deve dividir dois números', () => {
        const resultado = dividir(2, 7);
        expect (resultado).to.equal(2/7);
    })
})