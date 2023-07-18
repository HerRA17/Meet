import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {

    return props.showWelcomeScreen ?
    (
        <div className="WelcomeScreen">
            <h1>Welcome to the Meet app</h1>
            <p>
                Meet App will show you Full-Stack development events around the world.
            </p>
            <h4>
            Please log in to to get started.
            </h4>
            <div className="button_cont" align="center">
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                    <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
                    o.svg"
                    alt="Google sign-in"
                    />
                    </div>
                <button onClick={() => { props.getAccessToken() }}
                rel="nofollow noopener"
                className="btn-text"
                >
                <b>Sign in with google</b>
                </button>
                </div>
            </div>
            <a
            href="https://HerRA17.github.io/meet/privacy.html"
            rel="nofollow noopener"
            >
            Privacy policy
            </a>
        </div>
    )
    : null
}
export default WelcomeScreen;