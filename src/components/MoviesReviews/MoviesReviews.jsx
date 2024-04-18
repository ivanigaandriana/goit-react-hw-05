import React from 'react';

const MovieReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;