import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";

const MoviePage = props => {
    return (
        <Fragment>
            <h3> Movie id: {props.match.params.id} </h3>
            <h3> Detail page stub </h3>
        </Fragment>
    );
};

export default withRouter(MoviePage);