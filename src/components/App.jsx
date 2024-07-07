import { Routes, Route } from 'react-router-dom';
// import { Homepage } from '../pages/Homepage';
// import { Movies } from 'pages/Movies';
// import { MoviesDetailsPage } from 'pages/MoviesDetailsPage';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';
import { SharedLayout } from 'pages/SharedLayout';
import { NotFoundPage } from 'pages/NotFoundPage';

const Homepage = lazy(() => import('../pages/Homepage'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetailsPage = lazy(() => import('../pages/MoviesDetailsPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/movies" element={<Movies />}>
            <Route path=":movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
