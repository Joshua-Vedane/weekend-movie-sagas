import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import {Grid} from '@material-ui/core';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    console.log(movies);

    return (

      
        <main>
            <h1>MovieList</h1>
            {/* <h2>{movies.movies[0].title}</h2> */}
            <Grid container spacing={4} justify="center">
              {movies.map(movie => {
                return(
                  <Grid key={movie.id} item> 
                    <MovieItem movie={movie}/>
                  </Grid>
                )
              })}
              
            </Grid>


            {/* <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section> */}
        </main>

    );
}

export default MovieList;