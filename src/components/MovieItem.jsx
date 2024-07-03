import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateMovie, reviewMovie } from '../redux/actions/movieActions';
import '../styles/movieItem.scss';
import { useNavigate } from 'react-router-dom';

const MovieItem = ({ movie, onDelete, onToggleWatched }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState('');

  const handleEdit = () => {
    navigate(`/edit/${movie.id}`);
  };

  const handleRate = (e) => {
    const rating = e.target.value;
    dispatch(rateMovie(movie, rating));
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleAddReview = () => {
    dispatch(reviewMovie(movie, newReview));
    setNewReview(''); // Clear the input after adding review
  };

  return (
    <div className='movie-item'>
      <div className='box-container'>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>{movie.releaseYear}</p>
        <p>{movie.genre}</p>
        <p className='status'>Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>
        <div className='button-group'>
          <button onClick={onToggleWatched} className='watch-button'>
            Mark as {movie.watched ? 'Unwatched' : 'Watched'}
          </button>
          <button onClick={handleEdit} className='edit-button'>
            Edit
          </button>
          <button onClick={onDelete} className='delete-button'>
            Delete
          </button>
        </div>
        <div className='rating-container'>
          <label>Rating:</label>
          <select value={movie.rating} onChange={handleRate}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div className='review-container'>
          <label>Review:</label>
          <textarea value={newReview} onChange={handleReviewChange} />
          <button onClick={handleAddReview} className='add-review-button'>
            Add Review
          </button>
          {movie.reviews > 0 && (
            <div>
              <p>Reviews:</p>
              <ul className='reviews-list'>
                {movie.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
