import React, { useState, useContext, useEffect } from 'react';
import { fetchMovie } from '../lib/apiCall';
import { MovieContext } from "../contexts/MovieProvider";

import CardList from '../components/card-list';


const Movies = () => {
  
  const { movies, lang, page, _getMovie } = useContext(MovieContext);

  useEffect(() => {
    _getMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <h2 style={{ textAlign: 'center' }}>
        {' '}
        Movie list context Version (Data from themoviedb){' '}
      </h2>
      {movies.length > 0 ? (
        <CardList movies={movies} />
      ) : (
        <h3 style={{ textAlign: 'center', color: '#f5f5dc' }}>
          opps! it seems that no data
        </h3>
      )}
      {/* {stateError && <h2>{stateError}</h2>} */}
    </div>
  );
}

export default Movies