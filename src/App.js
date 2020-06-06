import React from 'react'
import Movies from './pages/movies'

import MovieProvider from './contexts/MovieProvider'

function App() {
  return (
    <MovieProvider>
      <Movies />
    </MovieProvider>
  )
}

export default App
