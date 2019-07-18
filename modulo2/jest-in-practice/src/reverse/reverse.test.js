import { expect } from 'chai'
import reverse from './reverse'

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