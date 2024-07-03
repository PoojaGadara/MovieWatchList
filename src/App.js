import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../src/redux/actions/movieActions';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EditMovie from './components/EditMovie'
import WatchList from './components/WatchList';
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import WithAuth from './auth/WithAuth';
import Logout from './components/Logout'

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Router>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/addMovie" element={<WithAuth><MovieForm /></WithAuth>} />
          <Route path="/listMovie" element={<WithAuth> <MovieList movies={movies} /></WithAuth>} />
          <Route path="/movie/:id" element={<WithAuth> <MovieDetails /></WithAuth>} />
          <Route path="/edit/:id" element={<WithAuth> <EditMovie /></WithAuth>} />
          <Route path="/watchlist" element={<WithAuth> <WatchList movies={movies} /></WithAuth>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
