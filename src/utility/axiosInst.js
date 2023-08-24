import axios from "axios";
//import env from "../../env";

const axiosInst = axios.create({
    // baseURL: 'http://localhost:3001',
    baseURL: process.env.VUE_APP_BASE_URL,
    //baseURL: env.api.MAIN_API_URL,
    timeout: 2500
})

export default axiosInst