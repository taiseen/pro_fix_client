import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../../img/google.png';
import proFixLogo from '../../img/proFix.jpg';

const Login = () => {
    document.title = 'Login';


    const handleLogin = () =>{
        console.log("login click");
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