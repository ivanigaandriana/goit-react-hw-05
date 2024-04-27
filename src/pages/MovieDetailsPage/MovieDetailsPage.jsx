import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import {
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import {
  movieCredits,
  moviesDetails,
  movieReviews,
} from '../../reserv/api';

import css from './MovieDetailsPage.module.css';
const MovieCast = lazy(() =>import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(()=>import ('../../components/MovieReviews/MovieReviews'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const prevLocation = useRef(location.state ?? '/movies');

  
  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      try {
        const details = await moviesDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  // Define a default image URL
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className='container'>
      <Link className={css.goBack} to={prevLocation.current}>
        ⬅️ Go back
      </Link>
      {movieDetails && (
        <div>
          <div>
            <ul className={css.movieDetailsList}>
              <li>
                <img
                  className={css.movieDetailsImg}
                  src={movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}` : defaultImg}
                  width={250}
                  alt="poster"
                />
              </li>
              <li>
                <h2 className={css.movieDetailsTitle}>
                  {movieDetails.title} ({movieDetails.release_date.split('-')[0]})
                </h2>
                <br />
                <p className={css.movieDetailsScored}>
                  User scored: {(movieDetails.vote_average * 10).toFixed(0)}%
                </p>
                <h3 className={css.movieDetailsOverviewTitle}>Overview</h3>
                <p className={css.movieDetailsOverviewDesc}>
                  {movieDetails.overview}
                </p>
                <h3 className={css.movieDetailsGenres}>Genres</h3>
                <ul className={css.movieDetailsGenresList}>
                  {movieDetails.genres.map((genre) => (
                    <li className={css.movieDetailsGenresItem} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className={css.additionalInfo}>Additional information</div>
          <div className={css.additionalInfoList}>
            <Link className={css.link} to='cast'>Cast</Link>
            <Link className={css.link} to='reviews'>Reviews</Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route className={css.cast} path='cast' element={<MovieCast />} />
              <Route path='reviews' element={<MovieReviews />} />
            </Routes>
          </Suspense>
        </div>
      )}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default MovieDetailsPage;