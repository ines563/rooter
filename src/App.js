
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {moviedata} from "./data";
import Filter from './comp/filtre/Filter';
import MovieList from './comp/movielist/MovieList';
import AddMovie from './comp/addmovie/AddMovie';
import { useState } from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom'


import Description from './comp/description/Description';

function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0)
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist,newMovie])
  }
  
  return (
    <div className="App">
      
      <Router>
     
        <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged} />
        <Route path="/" exact render={() =>   <MovieList
      
          movielist={movielist.filter((movie) =>
            movie.title.trim().toLowerCase().includes(title.trim().toLowerCase()) && movie.rate>=rate
          )}
        />}/>
        <AddMovie handleAdd = {handleAdd} /> 
        <Route
            path="/movieCard/:id"
            render={(props) => <Description {...props} movieList={movielist} exact/>}
          />
      </Router>


    </div>
  );
}

export default App; 
