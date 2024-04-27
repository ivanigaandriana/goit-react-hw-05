import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from '../../reserv/api';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await movieCredits(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchData(); 
  }, [movieId]); 

  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul className={css.cast}>
        {cast.map((actor) => (
          <li key={actor.id}
          className={css.castList}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              style={{ width: '100px', height: '150px' }}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;