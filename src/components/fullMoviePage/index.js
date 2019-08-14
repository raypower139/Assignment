import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fullMovie.css";
import { Link } from "react-router-dom";
import FullMovie from "../fullMoviePage/fullMovie"

export default ({ movie }) => {
    const title = capitalize(`${movie.title}`);
    const baseURL = 'https://image.tmdb.org/t/p/original';
    return (
        <Fragment className="bg-secondary text-light">
            <div className="row">
                <div className="col-2">
                    <Link to="/">
                        <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
                        <span>Back</span>
                    </Link>
                </div>

            </div>
            <div className="row">
                <div className="col-3">
                    <img
                        className="card-img-tag center"
                        alt={title}
                        src= {baseURL + movie.poster_path}
                    />
                </div>
                <div className="col-4">
                    <FullMovie movie={movie} />
                </div>
                <div className="col-5 bg-secondary text-light">
                    <span>Map placeholder</span>
                </div>
            </div>
        </Fragment>
    );
};