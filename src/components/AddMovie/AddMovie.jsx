import {Box, Typography, TextField, Button, Divider, Card, CardContent, CardActions, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function AddMovie () {
  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieGenreId, setMovieGenreId] = useState('');

  const genreList = useSelector((store) => store.genres)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleGenreSelect = (genreId) => {
    setMovieGenreId(genreId);
    setAnchorEl(null);
  }

  // cancel addition and reroute to home
  const handleCancel = () => {
    clearState();
    history.push('/')
  }

  // dispatch movie to sagas
  const handleAddMovie = () => {
    console.log('clicked added movie');
    const action = {
      type: 'ADD_MOVIE',
      payload: {
        title: movieTitle,
        poster: movieImage,
        description: movieDescription,
        genre_id: movieGenreId
      }
    }
    dispatch(action);
    clearState();
    history.push('/');
  }

  //reset local state
  const clearState = () => {
    setMovieTitle('');
    setMovieImage('');
    setMovieDescription('');
    setMovieGenreId('');
  }

  // GET genres on component load for menuItems
useEffect(() => dispatch ({type: 'FETCH_GENRES'}), []);

  return(
    <>
    <Box height={100} p={3}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box marginRight={2}>
            <Typography align="left" variant="h4"> Add A Movie</Typography>
          </Box>
          <Box>
            
          </Box>
        </Box>
      </Box>
    <Card>
      <CardContent>
        <Box>
          <TextField 
          label="Movie Title"
          fullWidth={true}
          variant="outlined"
          value={movieTitle}
          onChange={(event) => setMovieTitle(event.target.value)}
          />
        </Box>
        <Box>
          <TextField 
          label="URL"
          fullWidth={true}
          variant="outlined"
          value={movieImage}
          onChange={(event) => setMovieImage(event.target.value)}
          />
        </Box>
        <Box>
          <TextField 
          label="Description"
          fullWidth={true}
          multiline
          rows={5}
          variant="outlined"
          value={movieDescription}
          onChange={(event) => setMovieDescription(event.target.value)}
          />
        </Box>
      </CardContent>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardActions>
          <Button color= "primary" variant="contained" onClick={handleOpenMenu}>
            Genres
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}>
            {genreList.map((genreItem) => {
              return (
                <MenuItem key={genreItem.id} onClick={() => handleGenreSelect(genreItem.id)}>
                  {genreItem.name}
                </MenuItem>
              )
            })}
          </Menu>
        </CardActions>
      </Box>
       <Box display="flex" justifyContent="center">
         <CardActions>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleAddMovie}
            >
              Save
            </Button>
         </CardActions>
       </Box>
    </Card>
    </>
  )
}

export default AddMovie;