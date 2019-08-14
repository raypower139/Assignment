import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";
import api from "./dataStore/stubAPI";
import FullMovie from "./components/fullMoviePage/";

const MoviePage = props => {
    const {id} = props.match.params;
    const movie = api.find(id);
    return (
        <Fragment>
            {movie ? (
                <Fragment>
                    <FullMovie movie={movie}/>
                </Fragment>
            ) : (
                <p>Waiting for Movie details</p>
            )}
        </Fragment>
    );
};


export default withRouter(MoviePage);