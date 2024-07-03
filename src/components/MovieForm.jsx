import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/actions/movieActions';
import '../styles/movieForm.scss'
import { useNavigate } from 'react-router-dom';

const MovieForm = () => {

  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(), // Add a unique ID to the movie
      title,
      description,
      releaseYear,
      genre,
      watched: false,
      rating: 0,
      review: ''
    };
    dispatch(addMovie(newMovie));
    navigate(`/movie/${newMovie.id}`); // Redirect to the new movie details page
  };

  return (
    <div className='movieform'>
      <main>
        <h1>Add Movie</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Release Year</label>
        <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
      </div>
      <div>
        <label>Genre</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <button type="submit">Add Movie</button>
       
        </form>
      </main>
    </div>

   
  );
};

export default MovieForm;


{/* <form onSubmit={handleSubmit}>
<div>
  <label>Title</label>
  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
</div>
<div>
  <label>Description</label>
  <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
</div>
<div>
  <label>Release Year</label>
  <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
</div>
<div>
  <label>Genre</label>
  <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
</div>
<button type="submit">Add Movie</button>
</form> */}