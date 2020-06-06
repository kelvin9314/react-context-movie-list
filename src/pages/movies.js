import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../contexts/MovieProvider'

import CardList from '../components/card-list'

const Movies = () => {
  const { movies, lang, setLang, _getMovie } = useContext(MovieContext)

  useEffect(() => {
    _getMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  useEffect(() => {
    // https://upmostly.com/tutorials/build-an-infinite-scroll-component-in-react-using-react-hooks
    const handleScroll = () => {
      const current = window.innerHeight + document.documentElement.scrollTop
      console.log(`current: ${current}`)
      const height = document.documentElement.offsetHeight
      console.log(`height: ${height}`)
      if (current < height) return

      _getMovie()
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [_getMovie])

  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}> Movie list context Version (Data from themoviedb) </h2>
      {movies.length > 0 ? (
        <CardList movies={movies} />
      ) : (
        <h3 style={{ textAlign: 'center', color: '#f5f5dc' }}>opps! it seems that no data</h3>
      )}
      {/* {stateError && <h2>{stateError}</h2>} */}
    </div>
  )
}

export default Movies
