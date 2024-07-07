import React, { useState, useEffect } from 'react';
import { fetchReviews } from 'api/api';
import { useParams } from 'react-router-dom';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchedReviews = async () => {
      try {
        const reviews = await fetchReviews(movieId);
        console.log(reviews);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <ReviewsList key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};
