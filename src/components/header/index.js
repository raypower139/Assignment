import React, { Component } from "react";
import "./header.css"
import { Link } from "react-router-dom";
import AuthButton from "../authentication/authButton";

class Header extends Component {
    render() {
        return (
            <nav className="navbar  navbar-light">
                <Link className="navbar-brand text-white" to="/">
                    <div >
                        <img width="150" src="logo.svg"/> My Movie Database
                    </div>
                </Link>
                <div>
                    <h1 className="text-white">
                        Movie List <span className="badge badge-pill badge-success text-white">{this.props.noMovies}</span>
                    </h1>
                </div>
                <ul className="navbar-nav ">
                    <li className="nav-item text-white">
                        <AuthButton />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;