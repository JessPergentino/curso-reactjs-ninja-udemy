import ajax from '@fdaciuk/ajax'
import { UPDATE_ADDRESS } from './actions'

export const fetchAddress = (cep) => async (dispatch, getState) => {
  const response = await ajax({
    headers: { 'content-type': null }
  }).get('https://apps.widenet.com.br/busca-cep/api/cep.json', { code: cep })
  dispatch(updateAddress(response))
}

export const updateAddress = (data) => ({
  type: UPDATE_ADDRESS,
  payload: data
})
