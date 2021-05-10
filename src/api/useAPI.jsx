import axiosClient from './axiosClient';

const UserApi = {
  post: (url, data) => axiosClient.post(url, { ...data }),
};
export default UserApi;
