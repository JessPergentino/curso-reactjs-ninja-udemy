import { expect } from 'chai'
import reduce from './reduce'
import reduceRight from './reduce-right/reduce-right'

it("reduce should be a function", () => {
    expect(reduce).to.be.a('function')
})

it("reduce([1,2,3], (acc, item) => acc + item, 0) should return 6", () => {
    const before = reduce([1, 2, 3], (acc, item) => acc + item, 0)
    const after = 6
    expect(before).to.be.equal(after)
})

it("reduce([2,3,4], (acc, item) => acc + item, 0) should return 6", () => {
    const before = reduce([2, 3, 4], (acc, item) => acc + item, 0)
    const after = 9
    expect(before).to.be.equal(after)
})

it("reduce([2,3,4], (acc, item) => acc + item) should return 6", () => {
    const before = reduce([2, 3, 4], (acc, item) => acc + item)
    const after = 9
    expect(before).to.be.equal(after)
})

it("reduce([1,2], (acc, item) => {acc['number-' + item] = item; return acc}, {}) should return {'number-1': 1, 'number-2': 2}", () => {
    const before = reduce([1, 2], (acc, item) => {
        acc['number-' + item] = item
        return acc
    }, {})
    const after = { 'number-1': 1, 'number-2': 2 }
    expect(before).to.be.deep.equal(after)
})

it("reduce([1,2], (acc, item, index) => acc + index, 0) should return 6", () => {
    const before = reduce([1, 2], (acc, item, index) => acc + index, 0)
    const after = 1
    expect(before).to.be.equal(after)
})

it("reduce([1,2], (acc, item, index, array) => acc + array[index], 0) should return 6", () => {
    const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
    const after = 3
    expect(before).to.be.equal(after)
})

it("reduceRight(['ca', 'si', 'Jes'], (acc, item) => acc + item, '') should return 'Jessica'", () => {
    const before = reduceRight(['ca', 'si', 'Jes'], (acc, item) => acc + item, '')
    const after = "Jessica"
    expect(before).to.be.equal(after)
})

//Testes de Exceção
it('reduce(1) should throw a TypeError', () => {
    let err
    try {
        reduce(1)
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('reduce(1) should throw a TypeError with message "The first parameter must be an array"', () => {
    let err
    try {
        reduce(1)
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The first parameter must be an array')
})

it('reduce([1,2], "func") should throw a TypeError', () => {
    let err
    try {
        reduce([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('reduce([1,2]) should throw a TypeError with message "The second parameter must be a function"', () => {
    let err
    try {
        reduce([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The second parameter must be a function')
})