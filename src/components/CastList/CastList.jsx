import React from 'react';

export const CastList = ({ cast }) => {
  return (
    <li>
      <img
        width="150"
        height="200"
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
            : `https://fakeimg.pl/600x400?text=No+Image+Available`
        }
        alt={cast.original_name}
      />
      <h5>{cast.character}</h5>
    </li>
  );
};
