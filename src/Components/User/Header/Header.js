import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { UserContext } from '../../../App';

const Header = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);
    let [toggleClassName, setToggleClassName] = useState('');

    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    console.log(from.pathname);

    //pathname: "/admin/order_list"

    if(from.pathname == '/admin/order_list'){
        toggleClassName = 'admin_name';
    } else {
        toggleClassName = 'client_name';
    }

    return (
        <div class="heading_title">
            
            <h2 class="titleText">{document.title}</h2>

            <h3 class={toggleClassName}>Hello {loginUser.name} | {loginUser.email} </h3>
            
        </div>
    );
};

export default Header;