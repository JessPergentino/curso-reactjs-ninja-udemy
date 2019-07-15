import { expect } from 'chai'
import filter from './filter'

it('filter should be a function', () => {
    expect(filter).to.be.a('function')
})

it('filter([1,2], (item) => item) should be return [1,2]', () => {
    expect(filter([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('filter([3,4], (item) => item) should be return [3,4]', () => {
    expect(filter([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('filter() should return []', () => {
    expect(filter()).to.be.deep.equal([])
})

it('filter([1,2]) should return [1,2]', () => {
    expect(filter([1, 2])).to.be.deep.equal([1, 2])
})

it('filter([1,2], (item) => item > 1) should be return 2', () => {
    expect(filter([1], (item) => item == 1 ? item : 0)).to.be.deep.equal([1])
})