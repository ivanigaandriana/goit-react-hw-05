import React from 'react';

const MovieCast = ({ cast }) => {
  console.log(cast);
  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} // Оновлена частина коду тут
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