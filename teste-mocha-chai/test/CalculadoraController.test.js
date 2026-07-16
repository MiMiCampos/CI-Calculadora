const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');
const sinon = require('sinon'); // necessário para criar stubs e mocks
const CalculadoraService = require('../src/services/CalculadoraService'); // dependência do controller

describe ('Teste API Calculadora', () => {
    it('Calculadora deve retornar status 200 sem Mock', async () => {
        const resposta = await request(app)
            .post('/calculadora/dividir')
            .send({
                a: 10,
                b: 2
            })
            expect(resposta.status).to.equal(200);
            expect(resposta.body.resultado).to.equal(5);
    });

    it('Calculadora deve retornar status 200 com Mock', async () => {
        const stub = sinon.stub(CalculadoraService, 'dividir');
        stub.returns(9);

        const resposta = await request(app)
            .post('/calculadora/dividir')
            .send({
                a: 10,
                b: 2
            })
            expect(resposta.status).to.equal(200);
            expect(resposta.body.resultado).to.equal(9);
    });

})