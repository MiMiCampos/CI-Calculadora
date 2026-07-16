const { expect } = require('chai');
const { dividir } = require('../src/services/CalculadoraService');
const sinon = require('sinon');
const calculadora = require('../src/models/Calculadora');

describe('Testes da Calculadora Service', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('deve dividir dois números', () => {
        const stub = sinon.stub(calculadora, 'dividir');
        stub.returns(5);
        const resultado = dividir(10, 2);

        sinon.assert.calledOnce(stub);
        sinon.assert.calledOnceWithExactly(stub, 10, 2);

        expect (resultado).to.equal(5);
    })
    
    it ('deve lançar exceção quando dividir por zero', () => {
        const stub = sinon.stub(calculadora, 'dividir');
        expect(() => dividir(4, 0)).to.throw('O divisor não pode ser zero.');

        sinon.assert.notCalled(stub);
    })
})