import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, CardContent, Typography, TextField, Box } from '@material-ui/core';

function Details() {
  const movieDetail = useSelector((state) => state.movieDetails);
  const genreDetail = useSelector((state) => state.genreDetails);
  console.log(movieDetail);
  console.log(genreDetail);

  return (
    <>
      <h3> Welcome to Details</h3>
      {movieDetail.map((movie) => {
        return (
          <Card>
            <Box>
              <img src={movie.poster} alt={movie.title}/>
            </Box>
            <CardContent>
              <Typography variant="h5">
                {movie.title}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2">
                {movie.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h5">
                <span>Genres:  </span>
                {genreDetail.map((genre) => {
                  return(
                    <span>{genre.name}       </span>
                  )
                })}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </>
  )


}

export default Details