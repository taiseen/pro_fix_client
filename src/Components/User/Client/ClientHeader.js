import React from 'react';
import '../CommonHeader.css';
import proFixLogo from '../../../img/proFix.jpg';
import service from '../../../img/client/service.png';
import service_list from '../../../img/client/service_list.png';
import review from '../../../img/client/review.png';
import logout from '../../../img/client/logout.png';
import { Link } from 'react-router-dom';


const ClientHeader = () => {
    return (

        <header class="commonHeading">

            <div class="logo">
                <img src={proFixLogo} alt="" />
            </div>

            <nav>
                <ul class="admin_menu_list">
                    <li>
                        <img src={service} class="client_link_icon" alt="" />
                        <Link to='/client/service'>Service</Link>
                    </li>
                    <li>
                        <img src={service_list} class="client_link_icon" alt="" />
                        <Link to='/client/service_list'>Service List</Link>
                    </li>
                    <li>
                        <img src={review} class="client_link_icon" alt="" />
                        <Link to='/client/review'>Review</Link>
                    </li>
                    <li>
                        <img src={logout} class="client_link_icon" alt="" />
                        <Link to='/'>Logout</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default ClientHeader;