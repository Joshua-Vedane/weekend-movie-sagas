import {Box, Typography, TextField, Button, Divider, Card, CardContent, CardActions, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import {useState} from 'react';


function AddMovie () {
  const [anchorEl, setAnchorEl] = useState(null);
  const [movieName, setMovieName] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieCategory, setMovieCategory] = useState('');

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }




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
            Categories
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}>
            {/* map over all categoryList */}
            <MenuItem>
              {/* MenuItem on click handles adding category */}
              {/* CategoryItem.name goes here from map */}
              Fantasy
            </MenuItem>
          </Menu>
          
        </CardActions>
      </Box>
    </Card>
  )
}

export default AddMovie;