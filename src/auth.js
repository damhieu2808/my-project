import axios from 'axios';
const url = 'http://127.0.0.1:8000/';
export default {
  login(credentials) {
    return axios
      .post(url + 'user/login/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'user/register/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};