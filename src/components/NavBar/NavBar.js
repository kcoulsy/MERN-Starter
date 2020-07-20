import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogout } from './../../actions/auth';

function NavBar({ isLoggedIn, startLogout }) {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            {!isLoggedIn ? (
                <React.Fragment>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <li>
                        <button onClick={startLogout}>Logout</button>
                    </li>
                    <li>
                        <Link to="/secret">Secret</Link>
                    </li>
                </React.Fragment>
            )}
        </ul>
    );
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: typeof state.auth.token === 'string' && state.auth.token.length,
    };
};

const mapDispatchToProps = { startLogout };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);