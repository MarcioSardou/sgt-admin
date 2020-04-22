import axios from 'axios'
import { __API_URL__ } from '../constants/api'
import jwt_decode from 'jwt-decode'

export default {

    login: ({ username, password }) =>  {
        let queryLogin = `mutation { 
            accessToken(
              email: "${username}", 
              senha: "${password}"
            )
        }`

        return axios({
            method: 'POST',
            url: __API_URL__,
            data: { query: queryLogin },
        })
        .then(res => {
            let token = res.data.data

            if(token.hasOwnProperty('accessToken') && token.accessToken !== null) {
                token = token.accessToken
                localStorage.setItem('@admin:token', token)
                return Promise.resolve()
            }else{
                return Promise.reject()
            }
        })
        .catch(e => {
            return Promise.reject()
        })
    },

    logout: () => {
        localStorage.clear()
        return Promise.resolve(); 
    },

    checkAuth: () => {
        const token = localStorage.getItem('@admin:token')
        return !token || jwt_decode(token).exp < Date.now() / 1000 
            ? Promise.reject() 
            : Promise.resolve()  
    },

    getPermissions: () => {
        return Promise.resolve();
    }

}
