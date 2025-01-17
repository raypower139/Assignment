import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ movie }) => {
let title = movie.title;
let id = movie.id;

    return (
        <Fragment>
            <div className="text-light">
            <h2>
                <span>{title}</span>
            </h2>
            <p>
                <span>{movie.overview}</span>
            </p>
                <h4>
                    <span>Movie ID: {id}</span>
                </h4>
                <h4>
                <span>Release Date: {movie.release_date}</span>
            </h4>
            <h4>
                <span>Language: {movie.original_language}</span>
            </h4>

                </div>
        </Fragment>
    );
};