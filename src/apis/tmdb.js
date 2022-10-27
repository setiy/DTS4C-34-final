import axios from 'axios';

const API_KEY = '10792bac8bb87de0af460f6b3d720044';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
