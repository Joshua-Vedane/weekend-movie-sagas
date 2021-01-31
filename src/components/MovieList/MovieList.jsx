import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  //route to add movie view
  const handleAdd = () => {
    history.push('/add');
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  console.log(movies);

  return (
    <>
      <Box height={150} p={3}>
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
          <Box marginRight={2}>
            <Typography align="left" variant="h4"> Movie List</Typography>
          </Box>
          <Box>
            <Button p={2} variant="outlined" color="primary" onClick={handleAdd}>Add Movie</Button>
          </Box>
        </Box>
      </Box>
      <main>
        <Grid container spacing={4} justify="center">
          {movies.map(movie => {
            return (
              <Grid key={movie.id} item>
                <MovieItem movie={movie} />
              </Grid>
            )
          })}
        </Grid>
      </main>
    </>
  );
}

export default MovieList;