import entity from '../constants/entity'

function resolveEntity(resource, params){
  const dataEntity = entity[resource];
  return params ? dataEntity().params : dataEntity()
}

export default {
  GET_LIST: {
    dataSend(resource, params){
      return {
        query: `query { 
          all${resource} {
            edges {
              node {
                ${resolveEntity(resource, params)}
              }
            }
            totalCount
          }
        }`,
      }
    },
    
    dataReturn(res, resource){
      const data = res.data.data[`all${resource}`].edges.node
      if(data) return { data, total: res.data.data[`all${resource}`].totalCount }

      return Promise.reject();
    }

  },

  GET_ONE: {
    dataSend(resource, params){
      return {
        query: `query {
          ${resolveEntity(resource).singular} (id: ${params.id}) {
            ${resolveEntity(resource, params)}
          }
        }`,
      }
    },

    async dataReturn(res, resource){
      const resolve = await resolveEntity(resource).singular;
      const data = res.data.data[resolve];
      
      if(data) return { data }

      return Promise.reject();
    }
  },

  CREATE:{
    dataSend(resource, params){
      const createData = Object.entries(params.data).reduce(
        (acc, value) => {
          let fieldValue = value[1]

          if (fieldValue instanceof Array) fieldValue = `[${fieldValue}]`
          else if (typeof fieldValue === 'string')
            fieldValue = `"${fieldValue}"`

          return {
            input: `${acc.input}\n${value[0]}: ${fieldValue}`,
          }
        },
        { input: '', output: 'id' }
      )
      
      return {
        query: `mutation {
          ${resolveEntity(resource).create} (input: {${createData.input}}) {
            id
          }
        }`,
      }
    },
    dataReturn(res, resource){
      const data = res.data.data[`${resolveEntity(resource).create}`]
      if(data) return { data }

      return Promise.reject();
    }
  },

  UPDATE: {
    async dataSend(resource, params){

      const removeField = await entity.paramsToRemoveOnUpdate
      ? resolveEntity(resource).paramsToRemoveOnUpdate
      : null
      
      if (removeField) {
        removeField.forEach(field => {
          delete params.data[field]
        })
      }

      const updateData = Object.entries(params.data).reduce(
        (acc, value) => {
          let fieldValue = value[1]
  
          if (fieldValue instanceof Array) fieldValue = `[${fieldValue}]`
          else if (typeof fieldValue === 'string')
            fieldValue = `"${fieldValue}"`
          return {
            input: `${acc.input}\n${value[0]}: ${fieldValue}`,
          }
        },
        { input: '', output: 'id' }
      )
      
      return {
        query: `mutation {
          ${resolveEntity(resource).update} (id: ${params.id}, input: {${
          updateData.input
        }}) {
            id
          }
        }`,
      }
    },

    dataReturn(res, resource){

      const data = res.data.data[`${resolveEntity(resource).update}`]
      if(data) return { data }

      return Promise.reject();
    }
  },

  DELETE: {
    dataSend(resource, params){
      return {
        query: `mutation {
          ${resolveEntity(resource).delete} (id: ${params.id})
        }`,
      }
    },

    async dataReturn(res, resource){
      const data = res.data.data
      if(data) return { data }

      return Promise.reject();
    }
  },
}