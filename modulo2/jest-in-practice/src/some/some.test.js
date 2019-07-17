import { expect } from 'chai'
import some from './some'

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