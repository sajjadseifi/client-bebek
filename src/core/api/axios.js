import axios from "axios";

const axiosClient = axios.create({
   baseURL: 'https://bebek.iran.liara.run/api/',
 });
 
 export default axiosClient;