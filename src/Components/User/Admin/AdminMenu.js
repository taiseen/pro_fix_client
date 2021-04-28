import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../CommonHeader.css';
import proFixLogo from '../../../img/proFix.jpg';
import checklist from '../../../img/admin/checklist.png';
import add_service from '../../../img/admin/plus.png';
import add_admin from '../../../img/admin/add_admin.png';
import manage_service from '../../../img/admin/edit.png';
import delete_service from '../../../img/admin/delete_service.png';
import logout from '../../../img/admin/logout.png';
import { UserContext } from '../../../App';


const AdminMenu = () => {

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

                <Link to='/admin/order_list' >
                    <img src={checklist} class="admin_link_icon" alt="" />
                    <span>OrderList</span>
                </Link>

                <Link to='/admin/add_service' >
                    <img src={add_service} class="admin_link_icon" alt="" />
                    <span>Add Service</span>

                </Link>

                <Link to='#' >
                    <img src={delete_service} class="admin_link_icon" alt="" />
                    <span>Delete Service</span>
                </Link>

                <Link to='/admin/make_admin'>
                    <img src={add_admin} class="admin_link_icon" alt="" />
                    <span>Make Admin</span>
                </Link>

                <Link to='/admin/manage_services'>
                    <img src={manage_service} class="admin_link_icon" alt="" />
                    <span>List of Users Service</span>
                </Link>

                <Link onClick={handleLogOut} >
                    <img src={logout} class="admin_link_icon" alt="" />
                    <span>Log-out</span>
                </Link>

            </nav>

        </header>
    );
};

export default AdminMenu;