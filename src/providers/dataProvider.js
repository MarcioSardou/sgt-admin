import axios from 'axios'
import { __API_URL__ } from '../constants/api'
import requestTypes from '../constants/requestTypes'
import Errors from '../utils/error'

export default (type, resource, params) => {
  const token = localStorage.getItem('@admin:token')
  const dataResquest = requestTypes[type];

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
      let error = new Errors(e)
      let err = error.parse(e, ',');
      throw new Error(err)
  })
}
