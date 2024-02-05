import axios from "axios";

class AxiosFactory {
    create(url: string) {
        const instance = axios.create({
            baseURL: url,
            timeout: 10000,
        });

        instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        instance.interceptors.response.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        return instance;
    }
}

export default AxiosFactory;