import axios from 'axios';

const contactsAxiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set: (token) => {
    contactsAxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    contactsAxiosInstance.defaults.headers.common.Authorization =
      '';
  },
};

export { contactsAxiosInstance, token };
