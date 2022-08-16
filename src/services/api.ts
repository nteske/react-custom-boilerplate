import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_URL = `https://jsonplaceholder.typicode.com/`;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  },
  (error): Promise<Error> => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error): Promise<Error> => {
    return Promise.reject(error);
  }
);

export default api;
