import axios from 'axios';

export default {
  generateApi() {
    const api = axios.create({
      baseURL: 'https://pasarikan.herokuapp.com/',
    });
    return api;
  },
};
