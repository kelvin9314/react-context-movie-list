import React, { createContext, useState } from 'react';
import { httpQueryBuilder } from '../lib/helpers';
import { fetchMovie } from "../lib/apiCall";

export const MovieContext = createContext();

const MovieProvider = props => {

  const [page, setPage] = useState(1);
  const [lang, setLang] = useState('zh-TW');  
  const [movies, setMovies] = useState([]);
  
  
  const _getMovie = async () => {
    try {
      const { results } = await fetchMovie({ page, lang });
      setMovies(results)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MovieContext.Provider value={{ movies, page, lang, _getMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieProvider