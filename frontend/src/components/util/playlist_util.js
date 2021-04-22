import axios from 'axios';

export const getPlaylists = () => {
// /api/users/current`
   return axios.get("http://localhost:5000/api/playlists/")
}