import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import google from '../../img/google.png';
import profixLogo from '../../img/profix.jpg';

const LoginPage = () => {
    document.title = 'Login';


    const handleLogin = () =>{
        console.log("login click");
    }

    return (
        <div class="container">

            <div class="logo">
                <Link to="/home">
                <img src={profixLogo} alt="" />
                </Link>
            </div>

            <div class="login_area">
                <h2>Login</h2>

                
                    <div class="with_google" onClick={handleLogin}>
                        <img src={google} alt="" />
                        <div>
                            <p>Continue with Google</p>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default LoginPage;