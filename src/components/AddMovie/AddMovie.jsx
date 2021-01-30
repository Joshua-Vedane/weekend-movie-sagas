import {Box, Typography, TextField, Button, Divider, Card, CardContent, CardActions, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie () {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [movieName, setMovieName] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieGenre, setMovieGenre] = useState('');

  const genreList = useSelector((store) => store.genres)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleGenreSelect = (genreId) => {
    setMovieGenre(genreId);
    setAnchorEl(null);
  }

  console.log(genreList);
  console.log('movieGenre is now:', movieGenre);
  // GET genres on component load for menuItems
useEffect(() => dispatch ({type: 'FETCH_GENRES'}), []);

  return(
    <Card>
      <CardContent>
        <Box>
          <TextField 
          label="Movie Name"
          fullWidth={true}
          variant="outlined"
          value={movieName}
          onChange={(event) => setMovieName(event.target.value)}
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
    </Card>
  )
}

export default AddMovie;