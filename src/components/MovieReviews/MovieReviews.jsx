import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from '../../reserv/api';
 const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try{
        const reviewsData = await movieReviews(movieId);
        setReviews(reviewsData.results);
      }catch(error){
        console.error('Error fetching movie reviews:', error);
      }
  };
fetchReviews();}, [movieId]);
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