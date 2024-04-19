import { Suspense, useEffect, useRef, useState } from 'react'
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import {
  movieCredits,
  moviesDetails,
  movieReviews,
} from '../../reserv/api'

import css from './MovieDetailsPage.module.css'
import MovieCast from '../../components/MovieCast/MovieCast'
// import Loader from '../../components/Loader/Loader'
import MovieReviews from '../../components/MovieReviews/MovieReviews'

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const location = useLocation();
  // const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await moviesDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);
  const handleClickCast = async () => {
    try {
      const castData = await movieCredits(movieId);
      setCast(castData.cast);
    } catch (error) {
      console.error('Error fetching movie cast:', error);
    }
  };

  const handleClickReviews = async () => {
    try {
      const reviewsData = await movieReviews(movieId);
      setReviews(reviewsData.results);
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
    }
  };
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  

  return (
    <div>
      <Link className={css.goBack} to="/">
        ⬅️ Go back
      </Link>
      {movieDetails && (
        <div>
          <div>
            <ul className={css.movieDetailsList}>
              <li>
                <img
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
          <ul>
            <li>
              <NavLink className={css.link} to={`cast`} onClick={handleClickCast}>
                Cast
              </NavLink>
              <Routes>
                <Route path={`cast`} element={<MovieCast cast={cast} />} />
              </Routes>
            </li>
            <li>
              <NavLink className={css.link} to={`reviews`} onClick={handleClickReviews}>
                Reviews
              </NavLink>
              <Routes>
                <Route path={`reviews`} element={<MovieReviews reviews={reviews} />} />
              </Routes>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;