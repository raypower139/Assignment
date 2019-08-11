import React, { Component } from "react";
import Header from "./components/header/";
import MovieList from "./components/movieList/";
import FilterControls from "./components/filterControls/";

class App extends Component {
  render() {
    const sample = {
      name: 'Jaws',
      genre: 'Thriller',
      picture: {thumbnail: './jaws-thumb.jpg'}
    }

    const movies = [sample, sample, sample, sample, sample, sample, sample, sample];

    return (
        <div className="jumbotron">
          <Header noMovies={8} />
          <FilterControls />
          <MovieList movies={movies} />
        </div>
    );
  }
}

export default App;
