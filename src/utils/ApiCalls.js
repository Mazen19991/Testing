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
  sendPosts: () => {
   return AxiosInstance({
      baseURL,
      method: "post",
      url: "/jhavbdjahsm",
    });
  },
};

export default ApiService;
