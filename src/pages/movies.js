import React, { useState, useEffect } from 'react';
import { fetchMovie } from '../lib/apiCall'


import CardList from '../components/card-list';


const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const dataFetching = async () => {
        const data = await fetchMovie()
        const { results } = data
        console.log(results);
        setMovies(results);
      }
      dataFetching()
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
     <div className="App">
      <h2 style={{ textAlign: "center" }}> Movie list context Version (Data from themoviedb) </h2>
      <CardList movies={movies} />
      {/* {stateError && <h2>{stateError}</h2>} */}
    </div>
  )
}

export default Movies