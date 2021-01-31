import { useSelector } from 'react-redux';
import { Card, Button, CardContent, Typography, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function Details() {
  const history = useHistory();
  const movieDetail = useSelector((state) => state.movieDetails);
  const genreDetail = useSelector((state) => state.genreDetails);
  console.log(movieDetail);
  console.log(genreDetail);

  const goHome = () => {
    history.push('/');
  }

  return (
    <>
      <Box height={150} p={3}>
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
          <Box marginRight={2}>
            <Typography align="left" variant="h4"> Further Details</Typography>
          </Box>
          <Box>
            <Button p={2} variant="outlined" color="primary" onClick={goHome}>Home</Button>
          </Box>
        </Box>
      </Box>
      {movieDetail.map((movie) => {
        return (
          <Card>
            <Box>
              <img src={movie.poster} alt={movie.title} />
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
                  return (
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