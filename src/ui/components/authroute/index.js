import { connect } from "react-redux";
import {
    Route,
    Redirect
} from "react-router-dom";

const PrivateRoute = ({ children, loggedIn, ...rest }) => {
    return (
        <Route
        {...rest}
        render={({ location }) =>
            loggedIn ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
        }
        />
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.authentication.login.loggedIn
    };
}

export const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);