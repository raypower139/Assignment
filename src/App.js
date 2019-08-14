import React, { Component, Fragment } from "react";
import Header from "./components/header/";
import MovieList from "./components/movieList/";
import FilterControls from "./components/filterControls/";
import request from "superagent";
import api from "./dataStore/stubAPI";
import _ from "lodash";

class App extends Component {

    state = { search: "", original_language: "all"};

    handleChange = (type, value) => {
        type === "title"
            ? this.setState({ search: value })
            : this.setState({ original_language: value });
    };

    deleteMovie = (key) => {
        api.delete(key);
        this.setState({});
    };

  render() {
      let movies = api.getAll();
// SEARCH & FILTER
      let filteredMovies = movies.filter(c => {
          const title = `${c.title}`;
          return title.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
      });
      filteredMovies =
          this.state.original_language === "all"
              ? filteredMovies
              : filteredMovies.filter(c => c.original_language === this.state.original_language);
      let sortedMovies = _.sortBy(filteredMovies, c => c.title);

    return (
        <Fragment>
          <Header noMovies={sortedMovies.length} />
          <FilterControls onUserInput={this.handleChange}/>
          <MovieList movies={sortedMovies} deleteHandler={this.deleteMovie} />
        </Fragment>
    );
  }
}

export default App;
