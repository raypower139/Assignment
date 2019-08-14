import React, { Component } from "react";
import "./header.css"


class Header extends Component {
    render() {
        return (
            <div className="container-fluid header " >
                <div className="row">
                    <div >
                        <img width="150" src="logo.svg"/> My Movie Database
                    </div>
                </div>
                <div className="row offset-1">
                    <div>
                        <h1>
                            Movie List <span className="badge badge-pill badge-success">{this.props.noMovies}</span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;