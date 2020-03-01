import React from 'react';

import Card from './card';

import '../style/card-list.css';

const CardList = ({ movies }) => {
  return (
    <div className='card-list'>
      {movies.map(movie => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default CardList;
