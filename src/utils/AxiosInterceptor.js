import axios from "axios";

const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("error while performing axios request");
    console.log(err.message);
    return Promise.reject(err);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 404) {
      console.log("wrong api call");
    }
    console.log("error while performing axios request");
    console.log(err.message);
    return Promise.reject(err);
  }
);

export default AxiosInstance;
