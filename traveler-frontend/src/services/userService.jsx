import axios from 'axios';

export const signUp = (body) => {
  return axios.post('/api/1.0/users/add', body, {
    headers: { 'accept-language': 'tr' },
  });
};
