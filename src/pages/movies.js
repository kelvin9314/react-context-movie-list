import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../contexts/MovieProvider'
import { useTranslation } from 'react-i18next'

import CardList from '../components/card-list'

const Movies = () => {
  const { t } = useTranslation()
  const { movies, shouldRefetch, _changeLang, _getMovie } = useContext(MovieContext)

  useEffect(() => {
    _getMovie()
  }, [shouldRefetch])

  useEffect(() => {
    // https://upmostly.com/tutorials/build-an-infinite-scroll-component-in-react-using-react-hooks
    const handleScroll = () => {
      const current = window.innerHeight + document.documentElement.scrollTop
      // console.log(`current: ${current}`)
      const height = document.documentElement.offsetHeight
      // console.log(`height: ${height}`)
      if (current < height) return

      _getMovie()
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [_getMovie])

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }} onClick={() => _changeLang()}>
        {t('title')}
      </h1>
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
