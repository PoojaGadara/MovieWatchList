import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editMovie } from '../redux/actions/movieActions';
import '../styles/movieForm.scss'

const EditMovie = () => {
  const { id } = useParams();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id === parseInt(id))
  );
  
  const [title, setTitle] = useState(movie ? movie.title : '');
  const [description, setDescription] = useState(movie ? movie.description : '');
  const [releaseYear, setReleaseYear] = useState(movie ? movie.releaseYear : '');
  const [genre, setGenre] = useState(movie ? movie.genre : '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movie) {
      navigate('/');
    }
  }, [movie, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = {
      ...movie,
      title,
      description,
      releaseYear,
      genre
    };
    dispatch(editMovie(updatedMovie));
    navigate('/');
  };

  return (
    <div className='movieform'>
        <main>
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Release Year</label>
          <input
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <button type="submit">Update Movie</button>
      </form>
      </main>
    </div>
  );
};

export default EditMovie;
