import { Box, Card, Typography, CardContent, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Get details for clicked movie. 
  function handleDetails() {
    dispatch({ type: 'FETCH_DETAILS', payload: movie.id })
    // route to details page. will get detailsReducer in comp. 
    history.push('/details');
  }

  return (
    <Card variant="outlined">
      <Box>
        <Box>
          <img src={movie.poster} alt={movie.title} />
        </Box>
      </Box>
      <CardContent>
        <Box>
          <Typography>
            {movie.title}
          </Typography>
        </Box>
      </CardContent>
      <Box mb={2}>
        <Button
          onClick={handleDetails}
          color="primary"
          variant="contained">
          Details
        </Button>
      </Box>
    </Card>
  )
}

export default MovieItem;