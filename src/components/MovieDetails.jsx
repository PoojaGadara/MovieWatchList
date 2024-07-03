import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieItem from './MovieItem';
import '../styles/movieDetails.scss';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../redux/actions/movieActions';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id === parseInt(id))
  );

  console.log("Movie",movie)
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (

            <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={() => dispatch(deleteMovie(movie.id))}
          onToggleWatched={() => dispatch(toggleWatched(movie))}
        />
    
  );
};

export default MovieDetails;
