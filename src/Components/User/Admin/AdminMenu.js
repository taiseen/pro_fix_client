import React from 'react';
import { Link } from 'react-router-dom';
import '../CommonHeader.css';
import proFixLogo from '../../../img/proFix.jpg';
import checklist from '../../../img/admin/checklist.png';
import add_service from '../../../img/admin/plus.png';
import add_admin from '../../../img/admin/add_admin.png';
import manage_service from '../../../img/admin/edit.png';
import logout from '../../../img/admin/logout.png';


const AdminMenu = () => {
    return (

        <header class="commonHeading">

            <div class="logo">
                <Link to="/home">
                    <img src={proFixLogo} alt="" />
                </Link>
            </div>

            <nav>
                <ul class="admin_menu_list">
                    <li>
                        <img src={checklist} class="admin_link_icon" alt="" />
                        <Link to='/admin/order_list'>OrderList</Link>
                    </li>
                    <li>
                        <img src={add_service} class="admin_link_icon" alt="" />
                        <Link to='/admin/add_service'>Add Service</Link>
                    </li>
                    <li>
                        <img src={add_admin} class="admin_link_icon" alt="" />
                        <Link to='/admin/make_admin'>Make Admin</Link>
                    </li>
                    <li>
                        <img src={manage_service} class="admin_link_icon" alt="" />
                        <Link to='/admin/manage_services'>Manage Services</Link>
                    </li>
                    <li>
                        <img src={logout} class="admin_link_icon" alt="" />
                        <Link to='/'>Log-out</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default AdminMenu;