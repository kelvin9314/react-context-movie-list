import React, { createContext, useState } from 'react';
import { httpQueryBuilder } from '../lib/helpers';
import { fetchMovie } from "../lib/apiCall";

export const MovieContext = createContext();

const MovieProvider = props => {

  const [page, setPage] = useState(0);
  const [lang, setLang] = useState('zh-TW');  
  const [movies, setMovies] = useState([]);
  

  const _getMovie = async () => {
    try {
      let num = page + 1
      setPage(num)
      const { results } = await fetchMovie({ page: num, lang });
      setMovies([...movies, ...results]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MovieContext.Provider
      value={{ movies, page, lang, setLang, _getMovie, }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieProvider