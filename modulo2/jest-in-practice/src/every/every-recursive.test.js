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
    expect(every([1,2,3], (item, index) => index === item - 1)).to.be.deep.ok
})

it('every([1,2,3], (item, index, array) => array.length === 3) should be return true', () => {
    expect(every([1,2,3], (item, index, array) => array.length === 3)).to.be.deep.ok
})