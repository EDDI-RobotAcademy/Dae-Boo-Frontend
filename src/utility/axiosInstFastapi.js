import axios from "axios";
import env from "../../env";

const axiosInstFastApi = axios.create({
    baseURL: env.api.PYTHON_API_URL,
    timeout: 2500
});

export default axiosInstFastApi;