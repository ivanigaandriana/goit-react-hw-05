import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../reserv/api'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MovieList from '../../components/MovieList/MovieList '
import SearchForm from '../../components/SearchForm/SearchForm'

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSearch = async () => {
    try {
      setIsLoading(true)
      const result = await searchMovies(searchQuery)
      console.log(result)
      setSearchResults(result)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }
  const handleSubmit = (e) => {
    setSearchQuery(e.target.value)
    handleSearch()
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div>
      <h1></h1>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
      />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ul>
        <MovieList movies={searchResults} />
      </ul>
    </div>
  )
}

export default MoviesPage