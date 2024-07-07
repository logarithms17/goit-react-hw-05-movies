import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'api/api';
import { MoviesList } from 'components/MovieList/MovieList';

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]); //created storage of movies

  useEffect(() => {
    const fetchedTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchedTrendingMovies();
  }, []); //used useEffect with empty dependency because we will only execute this in the initial rendering

  return (
    <div>
      <h2>Trending Today</h2>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Homepage;
