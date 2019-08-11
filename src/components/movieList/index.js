import React, { Component } from "react";
import Movie from "../movie/";
import './movieList.css';

export default class MovieList extends Component {
    render() {
        const movieCards = this.props.movies.map(c => (
            <Movie key={c.title} movie={c} />
        ));
        return (
            <div className="container-fluid movies bg-info">
                <div className="row">{movieCards}</div>
            </div>
        );
    }
}