import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { SUCCESS } from './actions'

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: false
  })

  const action = deepFreeze({
    type: SUCCESS,
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
    status: 200,
    isFetching: false
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
