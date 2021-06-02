import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

const axiosClient = axios.create({
  baseURL: 'https://api.04-nike.tk/user',
  // baseURL: 'http://10.10.10.2:3001',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(
  async (config) =>
    // Handle token here ...
    config
);
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
