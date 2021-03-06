import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_GENRES', fetchAllGenres)
  yield takeEvery('FETCH_DETAILS', fetchDetails);
  yield takeEvery('ADD_MOVIE', postMovie);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get('/api/movie');
    // console.log('get all:', movies.data);
    yield put({ type: 'SET_MOVIES', payload: movies.data });

  } catch (error) {
    console.log('get all error', error);
  }
}

function* fetchAllGenres() {
  //get all genres from the DB
  try {
    const genres = yield axios.get('/api/genre');
    // console.log('get all genres:', genres.data);
    yield put({ type: 'SET_GENRES', payload: genres.data })
  } catch (error) {
    console.log('error in getting genres', error);
  }
}

function* fetchDetails(action) {
  // get details of movie from DB
  try {
    const movieId = action.payload;
    // console.log('get details for:', movieId);
    const movieDetails = yield axios.get(`/api/movie/${movieId}`)
    yield put({ type: 'SET_MOVIE_DETAILS', payload: movieDetails.data })
    //get genre details
    const genreDetails = yield axios.get(`/api/genre/${movieId}`)
    yield put({ type: 'SET_GENRE_DETAILS', payload: genreDetails.data })
  } catch (error) {
    console.log('error in getting details', error);
  }
}

function* postMovie(action) {
  // post movie to DB
  try {
    const newMovie = action.payload;
    yield axios.post('/api/movie', newMovie);
    yield put({ type: 'FETCH_MOVIES' })
  } catch (error) {
    console.log('error in adding movie', error);
  }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

//Used to store individual movie details
const movieDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Used to store individual genre details
const genreDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRE_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieDetails,
    genreDetails,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={storeInstance}>
    <App />
  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);
