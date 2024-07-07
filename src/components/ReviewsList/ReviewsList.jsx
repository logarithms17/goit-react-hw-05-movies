import React from 'react';

export const ReviewsList = ({ review }) => {
  return (
    <li>
      <p>{review.content}</p>
    </li>
  );
};
