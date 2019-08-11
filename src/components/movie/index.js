import React, { Component } from "react";
import "./movie.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let baseURL = 'https://image.tmdb.org/t/p/original';

class Movie extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        className="card-img-tag center"
                        alt={this.props.movie.title}
                        src= {"https://image.tmdb.org/t/p/w200" + this.props.movie.poster_path}
                    />
                    <div className="card-body">
                        <h5 className="card-title ">
                            {`${this.props.movie.title}`}
                        </h5>
                        <p key="genre">
                            <span> {this.props.movie.genre}</span>
                        </p>
                        <p key="release_date">
                            <span> {this.props.movie.release_date}</span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button type="button" className={"btn btn-default w-100"}>
                                {" Edit "}
                            </button>
                            <button type="button" className={"btn btn-danger w-100"}>
                                {"Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;