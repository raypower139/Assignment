import React, { Component } from "react";
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
        <div className="jumbotron" style={{
            backgroundColor: '#000',
            display: 'block',
        }}>


          <Header noMovies={sortedMovies.length} />
          <FilterControls onUserInput={this.handleChange}/>
          <MovieList movies={sortedMovies} deleteHandler={this.deleteMovie} />
        </div>
    );
  }
}

export default App;
