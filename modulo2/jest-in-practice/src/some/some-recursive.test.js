import { expect } from 'chai'
import some from './some-recursive'

it('some should be a function', () => {
    expect(some).to.be.a('function')
})

it('some([]) should return false', () => {
    expect(some([])).to.not.be.ok
})

it('some([1,2,3], (item) => item > 1) should be return true', () => {
    expect(some([1, 2, 3], (item) => item > 1)).to.be.deep.ok
})

it('some([1,2,3], (item) => item > 3) should be return false', () => {
    expect(some([1, 2, 3], (item) => item > 3)).to.not.be.deep.ok
})

it('some([1,2,3], (item, index) => index === item - 1) should be return true', () => {
    expect(some([1, 2, 3], (item, index) => index === item - 1)).to.be.deep.ok
})

it('some([1,2,3], (item, index, array) => array.length === 3) should be return true', () => {
    expect(some([1,2,3], (item, index, array) => array.length === 3)).to.be.deep.ok
})

//Testes de Exceção
it('some(1) should throw a TypeError', () => {
    let err
    try {
        some(1)
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('some(1) should throw a TypeError with message "The first parameter must be an array"', () => {
    let err
    try {
        some(1)
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The first parameter must be an array')
})

it('some([1,2], "func") should throw a TypeError', () => {
    let err
    try {
        some([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('some([1,2]) should throw a TypeError with message "The second parameter must be a function"', () => {
    let err
    try {
        some([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The second parameter must be a function')
})