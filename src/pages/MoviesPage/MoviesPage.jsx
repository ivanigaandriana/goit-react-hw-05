import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../reserv/api'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MovieList from '../../components/MovieList/MovieList '
import SearchForm from '../../components/SearchForm/SearchForm'
const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if (!searchQuery) return;
        setIsLoading(true);
        const result = await searchMovies(searchQuery);
        setSearchResults(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    handleSearch();
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set('query', searchQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <h1>Movies Page</h1>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
      />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ul>
        <MovieList movies={searchResults} />
      </ul>
    </div>
  );
};

export default MoviesPage;