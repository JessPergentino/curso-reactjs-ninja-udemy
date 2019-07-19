import { expect } from 'chai'
import find from './find-recursive'

it('find should be a function', () => {
    expect(find).to.be.a('function')
})

it('find([1,2], (item) => item) should be return 1', () => {
    const before = find([1, 2], (item) => item)
    const after = 1
    expect(before).to.be.deep.equal(after)
})

it('find([0, 1, 2], (item) => item) should be return 0', () => {
    const before = find([0, 1, 2], (item) => item)
    const after = 1
    expect(before).to.be.deep.equal(after)
})

it('find([1,2,3], (item) => item === 3) should be return 1', () => {
    const before = find([1, 2, 3], (item) => item === 3)
    const after = 3
    expect(before).to.be.deep.equal(after)
})

it('find([1,2,3], (item) => item === 4) should be return undefined', () => {
    const before = find([1, 2, 3], (item) => item === 4)
    const after = undefined
    expect(before).to.be.deep.equal(after)
})

it('find([1,2,3,5], (item, index) => item === index + 1) should be return [1,2,3]', () => {
    const before = find([1, 2, 3, 5], (item, index) => item === index + 1)
    const after = 1
    expect(before).to.be.deep.equal(after)
})

it('find([1,2,3,2,1,5], (item, index, array) => index === array.indexOf(item) ) should be return [1,2,3,5]', () => {
    const before = find([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))
    const after = 1
    expect(before).to.be.deep.equal(after)
})

//Testes de Exceção
it('find(1) should throw a TypeError', () => {
    let err
    try {
        find(1)
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('find(1) should throw a TypeError with message "The first parameter must be an array"', () => {
    let err
    try {
        find(1)
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The first parameter must be an array')
})

it('find([1,2], "func") should throw a TypeError', () => {
    let err
    try {
        find([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('find([1,2]) should throw a TypeError with message "The second parameter must be a function"', () => {
    let err
    try {
        find([1, 2], "func")
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The second parameter must be a function')
})