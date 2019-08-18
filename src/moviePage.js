import React, {Fragment} from "react";
import api from "./dataStore/stubAPI";
import FullMovie from "./components/fullMoviePage/";
import PrivateMovie from "./components/private/";
import { withRouter, Route, Link } from "react-router-dom";

const MoviePage = props => {
    const {id} = props.match.params;
    const movie = api.find(id);
    return (
        <Fragment>
            {movie ? (
                <Fragment>
                    <FullMovie movie={movie}/>

                    {!props.history.location.pathname.endsWith("/private") && (
                        <Link class="btn btn-primary active" to={`/movies/${id}/private`}>See More Info</Link>
                    )}
                    <Route path={`/movies/:id/private`}
                           render={ (props) => <PrivateMovie {...props} movie={movie} /> } />
                </Fragment>
            ) : (
                <p>Waiting for Movie details</p>
            )}
        </Fragment>
    );
};


export default withRouter(MoviePage);