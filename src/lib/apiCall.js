import axios from 'axios'
import { httpQueryBuilder } from './helpers'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://api.themoviedb.org/3/movie'
const API_TOKEN = process.env.REACT_APP_API_TOKEN
// console.log(process.env.REACT_APP_BASE_URL)
// console.log(process.env.REACT_APP_API_TOKEN)

export const fetchMovie = async ({ page, lang }) => {
  try {
    if (!API_TOKEN) throw Error("API Token doesn't exist")
    console.log(httpQueryBuilder({ page, lang }))

    const { data } = await axios.get(
      `${BASE_URL}/now_playing?${httpQueryBuilder({
        page,
        language: lang,
        api_key: API_TOKEN,
      })}`
    )
    return data
  } catch (err) {
    console.log(err.message)
    throw err
  }
}
