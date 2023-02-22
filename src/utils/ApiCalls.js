import AxiosInstance from "./AxiosInterceptor";

const baseURL = "https://jsonplaceholder.typicode.com";

const ApiService = {
  getPosts: () => {
   return AxiosInstance({
      baseURL,
      method: "get",
      url: "/posts",
    });
  },
};

export default ApiService;
