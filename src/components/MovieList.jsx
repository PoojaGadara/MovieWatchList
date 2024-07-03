import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, editMovie, toggleWatched } from '../redux/actions/movieActions';
import MovieItem from './MovieItem';


const MovieList = ({ movies }) => {
  const dispatch = useDispatch();

  return (
    <div>
      
      {movies.map((movie) => (
        
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

export default MovieList;
