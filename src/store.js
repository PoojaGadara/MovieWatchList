import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Use named export
import { movieReducer } from '../src/redux/reducers/movieReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
