import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL

const axiosClient = axios.create({ baseURL });
 
 axiosClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

 export default axiosClient;