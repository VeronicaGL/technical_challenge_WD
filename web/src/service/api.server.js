import axios from "axios";

const apiService = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.REACT_APP_BASE_API_URL || "http://localhost:5173/api/v1"
});

apiService.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      window.location.pathname !== "/phones"
    ) {
      localStorage.removeItem("/phones");
      window.location.assign("/");
    } else {
      return Promise.reject(error);
    }
  }
);

export const getAllPhones = () => {
  return apiService.get('/phones');
};

export default apiService;