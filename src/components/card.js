import React from 'react'

import '../style/card.css'

const Card = ({ movie }) => {
  return (
    <div className="card-container">
      <img alt={movie.title} width="100%" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <h3 style={{ textAlign: 'center' }}>{movie.title}</h3>
      <span style={{ textAlign: 'center' }}>{movie.release_date}</span>
    </div>
  )
}

export default Card
