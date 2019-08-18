import React, { Component } from "react";
import Movie from "../movie/";
import './movieList.css';

export default class MovieList extends Component {
    render() {
        const movieCards = this.props.movies.map(c => (
            <Movie key={c.id} movie={c} deleteHandler={this.props.deleteHandler} />
        ));
        return (
            <div className="container-fluid movies bg-info card-title">
                <div className="row">{movieCards}</div>
            </div>
        );
    }
}