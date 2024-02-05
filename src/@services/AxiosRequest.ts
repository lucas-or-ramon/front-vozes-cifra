import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import AxiosFactory from "./AxiosFactory";
import { APIReturn } from "./interfaces";

abstract class AxiosRequest {
    private axios: AxiosInstance;

    constructor(baseURL: string, headers: Record<string, string> = {}) {
        const factory = new AxiosFactory();
        this.axios = factory.create(baseURL);
        this.axios.defaults.headers = {
            ...this.axios.defaults.headers,
            ...headers,
        }
    }

    private execute = async <R>(callback: Promise<AxiosResponse<any, any>>): Promise<APIReturn<R>> => {
        try {
            const response = await callback;
            if (response.data) {
                return {
                    status: true,
                    values: response.data,
                };
            } else {
                return {
                    status: true,
                    message: "No data returned",
                };
            }
        } catch (error: any) {
            console.error(error);
            return {
                status: false,
                message: error.message,
            };
        }
    }

    private get = async <R>(url: string, config?: AxiosRequestConfig): Promise<APIReturn<R>> => {
        return this.execute<R>(this.axios.get(url, config));
    }

    private post = async <R>(url: string, data?: Record<string, any>, config?: AxiosRequestConfig): Promise<APIReturn<R>> => {
        return this.execute<R>(this.axios.post(url, data, config));
    }

    private put = async <R>(url: string, data?: Record<string, any>, config?: AxiosRequestConfig): Promise<APIReturn<R>> => {
        return this.execute<R>(this.axios.put(url, data, config));
    }

    private delete = async <R>(url: string, config?: AxiosRequestConfig): Promise<APIReturn<R>> => {
        return this.execute<R>(this.axios.delete(url, config));
    }

    protected get api() {
        return {
            get: this.get,
            post: this.post,
            put: this.put,
            delete: this.delete,
        };
    }
}

export default AxiosRequest;