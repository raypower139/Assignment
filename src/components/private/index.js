import React from "react";
import "./moviePrivate.css";
import "../../fontawesome";

export default ({ movie }) => {
    return (
        <div className="rowPrivate">
            <div className="col-12">
                <ul className="specs">
                    <li>
                        <h2>More Details</h2>
                        <dl>
                            <h4>
                                <span>Popularity: {movie.popularity}</span>
                            </h4>
                            <h4>
                                <span>Vote Average: {movie.vote_average}</span>
                            </h4>
                            <h4>
                                <span>Vote Count: {movie.vote_count}</span>
                            </h4>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
    );
};