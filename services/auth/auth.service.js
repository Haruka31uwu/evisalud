import axios from 'axios';
import apiClient from '../api/api.service';
const config = useRuntimeConfig();
class AuthService {
    async register(body) {

        console.log(body, config);
        try {
            await apiClient.get('/sanctum/csrf-cookie');
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/register`, body
            )
            console.log(res);
            return res;
        } catch (e) {
            console.error(e)
        }
    }
    async login(body) {
        try {
            await apiClient.get('/sanctum/csrf-cookie');
            const res = await axios.post(`${config.public.APP_BACKEND_URL}auth/login`, body)
            console.log(res);
            return res;
        } catch (e) {
            console.error(e)
        }
    }
}
export default new AuthService();