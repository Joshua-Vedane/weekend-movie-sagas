import {HashRouter as Router, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';

function App() {
  return (
    <div className="App">
      {/* <h1>The Movies Saga!</h1> */}
      <Router>
        <Container maxWidth="lg">
          <Route path="/" exact>
            <MovieList />
          </Route>
          
          
          {/* Details page */}
          <Route path="/details">
            <Details/>
          </Route>

          {/* Add Movie page */}

          <Route path="/add">
            <AddMovie/>
          </Route>
        </Container>        
      </Router>
    </div>
  );
}


export default App;
