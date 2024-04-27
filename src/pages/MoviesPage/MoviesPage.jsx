import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../reserv/api'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MovieList from '../../components/MovieList/MovieList '
import SearchForm from '../../components/SearchForm/SearchForm'

const MoviesPage = () => {
const [searchResults, setSearchResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query');


    useEffect(() => {

    if (!query) return;
    async function handleSubmit() {
      setError(false)
      setIsLoading(true)
    
    try{

      const data = await searchMovies(query);
      setSearchResults(data);
      setIsLoading(false);
      setSearchParams({ query: query });
    }catch(error){
      setError(error.message);
      setIsLoading(false);
    }
        }
        handleSubmit();
      }, [query]);
  const onSetSearchQuery = (searchWord) => {
     setSearchParams({ query: searchWord });
   }
return (
    <div> 
      <SearchForm
        onFormSubmit={onSetSearchQuery}
      />
      <MovieList movies={searchResults} />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
     
    </div>
  )
}

export default MoviesPage;