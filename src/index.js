import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import MoviePage from "./moviePage";
import Header from "./components/header/";
import LoginForm from "./components/authentication/loginForm";
import PrivateRoute from "./components/authentication/privateRoute";
import FilterControls from "./components/filterControls/";

class Router extends Component {
    componentDidMount() {
        //request.get("https://api.themoviedb.org/3/trending/all/day?api_key=efe6d9acf80c9ced12357e99a6a39124").end((error, res) => {
        request.get("https://api.themoviedb.org/3/movie/popular?api_key=efe6d9acf80c9ced12357e99a6a39124").end((error, res) => {
            if (res) {
                let { results: movies } = JSON.parse(res.text);
                api.initialize(movies);
                this.setState({});
            } else {
                console.log(error);
            }
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="jumbotron" style={{
                    backgroundColor: '#000',
                    display: 'block',
                }}>
                    <div className="container-fluid">
                        <Switch>
                            <PrivateRoute path="/movies/:id" component={MoviePage} />
                            <Route path="/login" component={LoginForm} />  {/* New route */}
                            <Route exact path="/" component={App} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Router />, document.getElementById("root"));