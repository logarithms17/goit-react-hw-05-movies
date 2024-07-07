import { useState, useEffect } from 'react';
import { fetchCast } from 'api/api';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    const fetchedCast = async () => {
      try {
        const castList = await fetchCast(movieId);
        setCasts(castList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchedCast();
  }, [movieId]);

  if (!casts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {casts.map(cast => (
          <CastList key={cast.id} cast={cast} />
        ))}
      </ul>
    </div>
  );
};

export default Cast;
