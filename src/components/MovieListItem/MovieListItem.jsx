import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieListItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
