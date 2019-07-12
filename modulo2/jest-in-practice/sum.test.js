
//Cria um escopo para os testes
// describe('# ESCOPO', () => {
// pode it ou test - Padrão it
//Cada teste fica dentro da função it
//     it('Testando Jest', () => {})
//     it('Testando Jest 2', () => {})
// })

//Quebando o teste
// it('Um é igual a 2', () => {
//     console.assert(1 === 2, '1 não é igual a 2')
// })

//Esperado e recebido
// it('1 é igual a 1', () => {
//     expect(1).toBe(2)
// })


//Executando o jest com ecmascript6
//Dependencias:
/*
        "babel-core": "^6.26.3"
        "babel-jest": "^15.0.0" -> Importante pro Jest
        "babel-preset-es2015": "^6.24.1"
        "babel-preset-stage-0": "^6.24.1"
*/
import { expect } from 'chai'
import sum from './sum'

it('sum should be a function', () => {
    expect(sum).to.be.a('function')
})

it('sum(1,2) should return 3', () => {
    expect(sum(1,2)).to.be.equal(3)
})


