import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-warning">
                    <div className="col-md-12">
                        <h4>
                            <span>Filter </span>
                            <input type="text" placeholder="Movie Search" />
                            <span> Genre: </span>
                            <select id="genre">
                                <option value="all">All</option>
                                <option value="action">Action</option>
                                <option value="thriller">Thriller</option>
                                <option value="comedy">Comedy</option>
                                <option value="horror">Horror</option>
                                <option value="sci-fi">Sci-Fi</option>
                            </select>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}