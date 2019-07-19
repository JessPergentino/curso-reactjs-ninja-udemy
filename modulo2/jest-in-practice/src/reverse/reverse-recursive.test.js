import { expect } from 'chai'
import reverse from './reverse-recursive'

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})

it('reverse([1]) should return an array', () => {
    expect(reverse([1])).to.be.deep.equals([1])
})

it('reverse([1,2,3]) should return [3,2,1]', () => {
    expect(reverse([1, 2, 3])).to.be.deep.equals([3, 2, 1])
})

it('reverse(["Jessica", "Pergentino"]) should return ["Pergentino", "Jessica"]', () => {
    expect(reverse(["Jessica", "Pergentino"])).to.be.deep.equals(["Pergentino", "Jessica"])
})

//Testes de Exceção
it('reverse(1) should throw a TypeError', () => {
    let err
    try {
        reverse(1)
    } catch (error) {
        err = error
    }
    expect(err.name).to.be.deep.equal('TypeError')
})

it('reverse(1) should throw a TypeError with message "The first parameter must be an array"', () => {
    let err
    try {
        reverse(1)
    } catch (error) {
        err = error
    }
    expect(err.message).to.be.deep.equal('The first parameter must be an array')
})