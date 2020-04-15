import axios from 'axios'
import { __API_URL__ } from '../constants/api'
import entity from '../constants/entity'

export default (type, resource, params) => {
  const token = localStorage.getItem('@admin:token')

  const data = type => {
    switch (type) {
      case 'GET_LIST':
        return {
          query: `query { 
            all${resource} {
              edges {
                node {
                  ${entity(resource).params}
                }
              }
              totalCount
            }
          }`,
        }
      case 'GET_ONE':
        return {
          query: `query {
            ${entity(resource).singular} (id: ${params.id}) {
              ${entity(resource).params}
            }
          }`,
        }
      case 'CREATE': {
        const removeField = entity(resource).paramsToRemoveOnCreate
          ? entity(resource).paramsToRemoveOnCreate
          : null

        if (removeField) {
          removeField.forEach(field => {
            delete params.data[field]
          })
        }
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
            ${entity(resource).create} (input: {${createData.input}}) {
              id
            }
          }`,
        }
      }
      case 'DELETE':
        return {
          query: `mutation {
            ${entity(resource).delete} (id: ${params.id}) {
              id
            }
          }`,
        }
      case 'UPDATE':
        delete params.data.id
        const brandType = localStorage.getItem('@admin:brand-type')
        localStorage.removeItem('@admin:brand-type')

        if (resource === 'Showcases') {
          if (brandType === 'Revista') {
            params.data.offersIds = []
          } else {
            params.data.magazineOffersIds = []
          }
        }

        const removeField = entity(resource).paramsToRemoveOnUpdate
          ? entity(resource).paramsToRemoveOnUpdate
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
            ${entity(resource).update} (id: ${params.id}, input: {${
            updateData.input
          }}) {
              id
            }
          }`,
        }
      default:
        break
    }
  }

  return axios({
    method: 'POST',
    url: __API_URL__,
    data: data(type),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      switch (type) {
        case 'GET_LIST': {
          const data = res.data.data[`all${resource}`].edges.map(
            edge => edge.node
          )
          return {
            data,
            total: res.data.data[`all${resource}`].totalCount,
          }
        }
        case 'GET_ONE': {
          switch (resource) {
            case 'Showcases': {
              const showcases = res.data.data.showcase
              const magazineOffersIds = showcases.magazineOffers.map(
                magazine => magazine.id
              )
              const offersIds = showcases.offers.map(offer => offer.id)
              const benefitsIds = showcases.benefits.map(benefit => benefit.id)

              return {
                data: {
                  ...showcases,
                  offersIds,
                  magazineOffersIds,
                  benefitsIds,
                },
              }
            }
            case 'MagazineOffers': {
              const magazineOffer = res.data.data.magazineOffer
              const advantageIds = res.data.data.magazineOffer.advantages.map(
                advantage => advantage.id
              )
              const disadvantageIds = res.data.data.magazineOffer.disadvantages.map(
                disadvantage => disadvantage.id
              )
              return {
                data: { ...magazineOffer, advantageIds, disadvantageIds },
              }
            }
            case 'Offers': {
              const offers = res.data.data.offer
              const advantageIds = res.data.data.offer.advantages.map(
                advantage => advantage.id
              )
              const disadvantageIds = res.data.data.offer.disadvantages.map(
                disadvantage => disadvantage.id
              )
              const paymentIds = res.data.data.offer.payments.map(
                payment => payment.id
              )

              const benefitIds = res.data.data.offer.benefits.map(
                benefit => benefit.id
              )
              return {
                data: {
                  ...offers,
                  advantageIds,
                  disadvantageIds,
                  paymentIds,
                  benefitIds,
                },
              }
            }
            default:
              return {
                data: res.data.data[`${entity(resource).singular}`],
              }
          }
        }
        case 'CREATE': {
          return {
            data: res.data.data[`${entity(resource).create}`],
          }
        }
        case 'UPDATE': {
          return {
            data: res.data.data[`${entity(resource).update}`],
          }
        }
        case 'DELETE': {
          return {
            data: res.data.data[`${entity(resource).delete}`],
          }
        }
        default:
          break
      }
    })
    .catch(_ => {
      switch (type) {
        case 'CREATE':
        case 'UPDATE':
          throw new Error(
            'Formulário não é válido. Por favor verifique os erros'
          )
        case 'DELETE':
          throw new Error('Você não pode excluir esse item.')
        case 'GET_ONE':
        case 'GET_LIST':
          throw new Error('Erro na comunicação com servidor')
        default:
          break
      }
    })
}
