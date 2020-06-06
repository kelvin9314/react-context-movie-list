import React, { createContext, useState, useEffect } from 'react'
// import { httpQueryBuilder } from '../lib/helpers'
import { fetchMovie } from '../lib/apiCall'
import { useTranslation } from 'react-i18next'

export const MovieContext = createContext()

const MovieProvider = props => {
  const { i18n } = useTranslation()
  const [page, setPage] = useState(0)
  const [movies, setMovies] = useState([])
  const [shouldRefetch, setShouldRefetch] = useState(false)

  useEffect(() => {
    setMovies([])
    setPage(0)
    setShouldRefetch(true)
  }, [i18n.language])

  /**
   * 改變目前語系
   * 語系現在只有 "zh-TW" or "en-US"
   */
  const _changeLang = () => {
    const targetLang = i18n.language === 'zh-TW' ? 'en-US' : 'zh-TW'
    i18n.changeLanguage(targetLang)
  }

  const _getMovie = async () => {
    try {
      const num = page + 1
      setPage(num)
      const { results } = await fetchMovie({ page: num, lang: i18n.language })
      setMovies([...movies, ...results])
      if (shouldRefetch) setShouldRefetch(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <MovieContext.Provider value={{ movies, shouldRefetch, _changeLang, _getMovie }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
