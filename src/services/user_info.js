import {http} from './config'

export default {

    listar:(user) => {
        return http.get('users/'+user+'/repos')
    }

}