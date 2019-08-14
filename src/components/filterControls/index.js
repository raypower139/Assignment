import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    handleTextChange = e => {
        this.handleChange(e, "title", e.target.value);
    };
    handleGenreChange = e => {
        this.handleChange(e, "genre", e.target.value);
    };


    render() {

        return (
            <div className="container-fluid">
                <div className="row bg-warning">
                    <div className="col-md-12">
                        <h4>
                            <span>Filter </span>
                            <input type="text" placeholder="Movie Search" onChange={this.handleTextChange}/>
                            <span> Language: </span>
                            <select id="original_language" onChange={this.handleGenreChange}>
                                <option value="all">All</option>
                                <option value="en">English</option>
                                <option value="es">Spanish</option>

                            </select>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}