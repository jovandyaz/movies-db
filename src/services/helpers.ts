import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const handleRequestResponse = (response: AxiosResponse) => {
  return response.data ? response.data.data ?? response.data : response;
};

const handleRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

export const createAxiosInstance = (
  config: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create(config);

  instance.interceptors.response.use(handleRequestResponse, handleRequestError);

  return instance;
};

export const createAxiosClient = (instance: AxiosInstance) => {
  instance.interceptors.response.use(handleRequestResponse, handleRequestError);

  return instance;
};
