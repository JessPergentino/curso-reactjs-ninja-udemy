import { expect } from 'chai'
import every from './every-recursive'

it('every should be a function', () => {
    expect(every).to.be.a('function')
})

it('every([]) should return true', () => {
    expect(every([])).to.be.ok
})

it('every([1,2], (item) => item > 0) should be return true', () => {
    expect(every([1, 2], (item) => item > 0)).to.be.deep.ok
})

it('filter([1,2,3], (item) => item > 1) should be return false', () => {
    expect(every([1, 2, 3], (item) => item > 1)).to.not.be.deep.ok
})

it('filter([1,2,3], (item) => item > 0) should be return true', () => {
    expect(every([1, 2, 3], (item) => item > 0)).to.be.deep.ok
})

it('every([1,2,3], (item, index) => index === item - 1) should be return true', () => {
    expect(every([1, 2, 3], (item, index) => index === item - 1)).to.be.deep.ok
})

it('every([1,2,3], (item, index, array) => array.length === 3) should be return true', () => {
    expect(every([1, 2, 3], (item, index, array) => array.length === 3)).to.be.deep.ok
})

//Testes de Exceção
it('every(1) should throw a TypeError', () => {
    let err
    try {
        every(1)
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('every(1) should throw a TypeError with message "The first parameter must be an array"', () => {
    let err
    try {
        every(1)
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The first parameter must be an array')
})

it('every([1,2], "func") should throw a TypeError', () => {
    let err
    try {
        every([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('every([1,2]) should throw a TypeError with message "The second parameter must be a function"', () => {
    let err
    try {
        every([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The second parameter must be a function')
})