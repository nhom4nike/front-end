import axiosClient from './axiosClient';

const UserApi = {
  post (url, data, token) {
    if (token) {
      return axiosClient.post(
        url,
        { ...data },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );
    }
    console.log('no token');
    return axiosClient.post(url, { ...data });
  },
  get (url, token) {
    if (token) {
      return axiosClient.get(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
    }
    console.log('no token');
    return axiosClient.get(url);
  },
};
export default UserApi;
