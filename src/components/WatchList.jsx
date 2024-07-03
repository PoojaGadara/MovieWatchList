import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../redux/actions/movieActions';
import MovieItem from './MovieItem';

const WatchList = ({ movies }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {movies
        .filter((movie) => movie.watched) // Only include watched movies
        .map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onDelete={() => dispatch(deleteMovie(movie.id))}
            onToggleWatched={() => dispatch(toggleWatched(movie))}
          />
        ))}
    </div>
  );
};

export default WatchList;
