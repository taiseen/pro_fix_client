import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import '../CommonHeader.css';
import proFixLogo from '../../../img/proFix.jpg';
import service from '../../../img/client/service.png';
import service_list from '../../../img/client/service_list.png';
import review from '../../../img/client/review.png';
import logout from '../../../img/client/logout.png';



const ClientMenu = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);

    const handleLogOut = () => {
        setLoginUser({})
        sessionStorage.clear('token');
    }

    return (

        <header class="commonHeading">

            <div class="logo">
                <Link to="/home">
                    <img src={proFixLogo} alt="" />
                </Link>
            </div>

            <nav class="admin_menu_list">

                <Link to='/client/service'>
                    <img src={service} class="client_link_icon" alt="" />
                    <span>Service</span>
                </Link>

                <Link to='/client/service_list'>
                    <img src={service_list} class="client_link_icon" alt="" />
                    <span>Service List</span>
                </Link>

                <Link to='/client/review'>
                    <img src={review} class="client_link_icon" alt="" />
                    <span>Review</span>
                </Link>

                <Link onClick={handleLogOut} >
                    <img src={logout} class="client_link_icon" alt="" />
                    <span>Logout</span>
                </Link>

            </nav>

        </header>
    );
};

export default ClientMenu;