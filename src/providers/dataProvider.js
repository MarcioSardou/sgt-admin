import axios from 'axios'
import { __API_URL__ } from '../constants/api'
import crudRequestTypes from '../constants/crudRequestTypes'

export default (type, resource, params) => {
  const token = localStorage.getItem('@admin:token')
  const dataResquest = crudRequestTypes[type];

  return axios({
    method: 'POST',
    url: __API_URL__,
    data: dataResquest.dataSend(resource, params),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => dataResquest.dataReturn(res, resource))
  .catch(e => {
      throw new Error(e)
  })
}

export const appRequest =  async query => {
  const token = localStorage.getItem('@admin:token')

  return axios({
    url: __API_URL__,
    method: 'post',
    data: {
      query: `
        query {
          ${query}
        }
      `,
    },
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
