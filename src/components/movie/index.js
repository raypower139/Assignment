import React, { Component, Fragment } from "react";
import "./movie.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI'
import { Link } from "react-router-dom";



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
// EDIT, DELETE ,SAVE & CANCEL
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

    handleDelete = () =>  this.setState({ status : 'del'} );
    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.props.movie.id);
    };


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
        }else if (this.state.status === 'del' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
        }


        return (
            <div className="col-sm-3">
                <div className="card">
                    <Link to={`/movies/${this.props.movie.id}`}>
                    <img
                        className="card-img-tag center"
                        alt={this.props.movie.title}
                        src= {baseURL + this.props.movie.poster_path}
                    />
                    </Link>
                    <div className="card-body">
                        <div className="card-title ">
                        {this.state.status === "edit" ? (
                            <Fragment>
                                <div className="card-title">

                                    <input
                                        type="text"
                                        className="form-control card-title card"
                                        value={this.state.title}
                                        onChange={this.handleTitleChange}
                                    />
                                </div>
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
                                <h5 classname="card-title title">
                                    <FontAwesomeIcon icon={["fas", "film"]} />
                                    <span> {this.state.title} </span>
                                </h5>
                                <p>
                                    <span> {this.state.overview} </span>
                                </p>

                            </Fragment>
                        )}</div>
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