import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://cnodejs.org/api/v1'
})

instance.interceptors.request.use(config => config, err => Promise.reject(err))

instance.interceptors.response.use(response => response, err => Promise.reject(err))

export default instance
