import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import proFixLogo from '../../../img/proFix.jpg';

const Header = () => {

    return (
        <header className="homeHeader">
            <div className="logo">
                <img src={proFixLogo} alt="" />
            </div>

            <input type="checkbox" id="check_box" />
            <label class="check_box_label" for="check_box">
                <i class="fas fa-bars"></i>
            </label>

            <nav className="homeNavigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><Link to="/admin/orderList">Admin</Link></li>
                    <li><Link to="/login" class="active">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;