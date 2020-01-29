import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('address should be a function', () => {
  expect(address).to.be.a('function')
})

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: 'Ladeira Ramos de Queiroz',
      city: 'Salvador',
      code: '40301-285',
      district: 'Santo Antônio',
      state: 'BA',
      status: 200
    }
  })

  const after = {
    address: 'Ladeira Ramos de Queiroz',
    city: 'Salvador',
    code: '40301-285',
    district: 'Santo Antônio',
    state: 'BA',
    status: 200
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
