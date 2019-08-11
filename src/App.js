import React, { Component } from "react";
import Header from "./components/header/";
import MovieList from "./components/movieList/";
import FilterControls from "./components/filterControls/";
import request from "superagent";
import api from "./dataStore/stubAPI";

class App extends Component {
  componentDidMount() {
    request.get("https://api.themoviedb.org/3/trending/all/day?api_key=efe6d9acf80c9ced12357e99a6a39124").end((error, res) => {
      if (res) {
        let { results: movies } = JSON.parse(res.text);
        api.initialize(movies);
        this.setState({});
      } else {
        console.log(error);
      }
    });
  }
  render() {
    let movies = api.getAll();

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
