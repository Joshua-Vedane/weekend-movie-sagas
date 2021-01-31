import { HashRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="lg">
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/add">
            <AddMovie />
          </Route>
        </Container>
      </Router>
    </div>
  );
}


export default App;
