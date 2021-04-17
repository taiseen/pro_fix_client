import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import google from '../../img/google.png';
import proFixLogo from '../../img/proFix.jpg';

import firebase from "firebase/app";
import firebaseConfig from '../FireBase/FireBaseConfig';
import "firebase/auth";
import { UserContext } from '../../App';


//############################################################
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
//############################################################

const Login = () => {
    document.title = 'Login';

    const [loginUser, setLoginUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const storeUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(error => {
            console.log("From Token ", error)
        });
    }


    const handleLogin = () => {
        console.log("login click");

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                // Get User Needful Info...
                const { displayName, email, photoURL } = result.user;
                console.log(result.user);

                // creating a new object...
                const signInUser = {
                    name: displayName,
                    email,
                    photo: photoURL,
                }
                console.log(signInUser);

                //storeUserToken();
                setLoginUser(signInUser);
                history.replace(from);

            }).catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
            });
    }

    return (
        <div class="container">

            <div class="logo">
                <Link to="/home">
                    <img src={proFixLogo} alt="" />
                </Link>
            </div>

            <div class="login_area">
                <h2>Login</h2>

                <Link to="/client/service">
                    <div class="with_google" onClick={handleLogin}>
                        <img src={google} alt="" />
                        <div>
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Login;