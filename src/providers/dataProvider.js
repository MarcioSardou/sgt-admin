import axios from 'axios'
import { __API_URL__ } from '../constants/api'
import entity from '../constants/entity'

export default (type, resource, params) => {
  return axios({
    method: 'POST',
    url: __API_URL__,
    data: {"query":`query { 
      allTeachers {
        edges {
          node {
            id
            nome
          }
        }
        totalCount
      }
    }`}
  })
  .then((res) => {
    const data = res.data.data.allTeachers.edges.map(edge => edge.node)
    return {
      data: data,
      total: res.data.data.allTeachers.totalCount
    }
  })
}