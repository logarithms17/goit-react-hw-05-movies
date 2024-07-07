import { useState } from 'react';
import { fetchMovieByQuery } from 'api/api';
import { MoviesList } from 'components/MovieList/MovieList';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  // const movieName = searchParams.get('query') ?? 'friends';
  // console.log(movieName);

  const fetchedMovieByQuery = async () => {
    console.log(movies);
    try {
      const data = await fetchMovieByQuery(searchQuery);

      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search movies"
        />
        <button onClick={fetchedMovieByQuery}>Search</button>
      </div>

      <div>
        <MoviesList movies={movies} />
      </div>
      <Outlet />
    </div>
  );
};
export default Movies;
