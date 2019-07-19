import { expect } from 'chai'
import filter from './filter'

it('filter should be a function', () => {
    expect(filter).to.be.a('function')
})

it('filter([1,2], (item) => item) should be return [1,2]', () => {
    expect(filter([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('filter([0,1,2], (item) => item) should be return [1,2]', () => {
    expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('filter([1,2,3], (item) => item < 2) should be return [1]', () => {
    expect(filter([1, 2, 3], (item) => item < 2)).to.be.deep.equal([1])
})

it('filter([1,2,3,5], (item, index) => item === index + 1) should be return [1,2,3]', () => {
    expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3])
})

it('filter([1,2,3,2,1,5], (item, index, array) => index === array.indexOf(item) ) should be return [1,2,3,5]', () => {
    expect(filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))).to.be.deep.equal([1, 2, 3, 5])
})

//Testes de Exceção
it('filter(1) should throw a TypeError', () => {
    let err
    try {
        filter(1)
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('filter(1) should throw a TypeError with message "The first parameter must be an array"', () => {
    let err
    try {
        filter(1)
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The first parameter must be an array')
})

it('filter([1,2], "func") should throw a TypeError', () => {
    let err
    try {
        filter([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('filter([1,2]) should throw a TypeError with message "The second parameter must be a function"', () => {
    let err
    try {
        filter([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The second parameter must be a function')
})