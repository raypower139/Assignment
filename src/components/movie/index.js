import React, { Component, Fragment } from "react";
import "./movie.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI'

const baseURL = 'https://image.tmdb.org/t/p/original';

class Movie extends Component {
// SET STATE
    state = {
        status: "",
        title: this.props.movie.title,
        overview: this.props.movie.overview,
        previousDetails: {
            title: this.props.movie.title,
            overview: this.props.movie.overview
        }
    };
// EDIT, SAVE & CANCEL
    handleEdit = () => this.setState({ status: "edit" });

    handleCancel = () => {
        let {title,overview} = this.state.previousDetails;
        this.setState({ status: "", title, overview });
    };

    handleSave = e => {
        e.preventDefault();
        let updatedTitle = this.state.title.trim();
        let updatedOverview = this.state.overview.trim();
        if (!updatedOverview || !updatedTitle) {
            return;
        }
        let {title,overview} = this.state;
        this.setState({ status: "", previousDetails: {title,overview} });
        api.update(this.state.previousDetails.id, updatedTitle,updatedOverview);
    };

    handleTitleChange = e => this.setState({ title: e.target.value });
    handleOverviewChange = e => this.setState({ overview: e.target.value });


// RENDER
    render() {
        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let cardColor = "bg-white";
        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
        }

        return (
            <div className="col-sm-3">
                <div className={`card  ${cardColor}`}>
                    <img
                        className="card-img-tag center"
                        alt={this.props.movie.title}
                        src= {baseURL + this.props.movie.poster_path}
                    />
                    <div className="card-body">
                        <h5 className="card-title ">
                            {this.props.movie.title}
                        </h5>
                        {this.state.status === "edit" ? (
                            <Fragment>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.title}
                                        onChange={this.handleTitleChange}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.overview}
                                        onChange={this.handleOverviewChange}
                                    />
                                </p>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <p>
                                    <FontAwesomeIcon icon={["fas", "phone"]} />
                                    <span> {this.state.title} </span>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={["fas", "phone"]} />
                                    <span> {this.state.overview} </span>
                                </p>
                            </Fragment>
                        )}
                    </div>


                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button
                                type="button"
                                className={"btn w-100 " + activeButtons.leftButtonColor}
                                onClick={leftButtonHandler}
                            >
                                {activeButtons.leftButtonVal}
                            </button>
                            <button
                                type="button"
                                className={"btn w-100 " + activeButtons.rightButtonColor}
                                onClick={rightButtonHandler}
                            >
                                {activeButtons.rightButtonVal}
                            </button>
                        </div>
                    </div>
                </div>
                </div>

        );
    }
}

export default Movie;