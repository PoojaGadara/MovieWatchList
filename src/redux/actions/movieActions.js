import axios from 'axios';

export const getMovies = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3001/movies');
  dispatch({ type: 'GET_MOVIES', payload: res.data });
};

export const addMovie = (movie) => async (dispatch) => {
  const res = await axios.post('http://localhost:3001/movies', movie);
  dispatch({ type: 'ADD_MOVIE', payload: res.data });
};

export const editMovie = (movie) => async (dispatch) => {
  const res = await axios.put(`http://localhost:3001/movies/${movie.id}`, movie);
  dispatch({ type: 'EDIT_MOVIE', payload: res.data });
};

export const deleteMovie = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/movies/${id}`);
  dispatch({ type: 'DELETE_MOVIE', payload: id });
};

export const toggleWatched = (movie) => async (dispatch) => {
  console.log(movie.watched)
  movie.watched = !movie.watched;
  const res = await axios.put(`http://localhost:3001/movies/${movie.id}`, movie);
  dispatch({ type: 'TOGGLE_WATCHED', payload: res.data });
};

export const rateMovie = (movie, rating) => async (dispatch) => {
  movie.rating = rating;
  const res = await axios.put(`http://localhost:3001/movies/${movie.id}`, movie);
  dispatch({ type: 'RATE_MOVIE', payload: res.data });
};

export const reviewMovie = (movie, review) => async (dispatch) => {
  movie.review = review;
  const res = await axios.put(`http://localhost:3001/movies/${movie.id}`, movie);
  dispatch({ type: 'REVIEW_MOVIE', payload: res.data });
};
