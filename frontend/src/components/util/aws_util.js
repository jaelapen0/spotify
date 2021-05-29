import axios from 'axios';

export const getAWSFile = () => {
   // /api/users/current`
   return axios.get('/api/aws/')
}