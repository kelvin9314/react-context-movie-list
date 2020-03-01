import axios from 'axios'

const BASE_URL =
  process.env.REACT_APP_BASE_URL || 'https://api.themoviedb.org/3/movie';
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const fetchMovie = async (page) => {
  try {
    if (!API_TOKEN) throw Error("API Token doesn't exist");
    
    const res = await axios.get(
      `${BASE_URL}/now_playing?api_key=${API_TOKEN}&language=zh-TW`
    );
    console.log(res.data);
    return res.data
  } catch (err) {
    throw err
  }
}