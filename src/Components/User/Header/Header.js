import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { UserContext } from '../../../App';

const Header = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);
    const { name , email} = loginUser;

    const location = useLocation();
    const firstWord = location.pathname.slice(0, 6);

    let toggleClassName ;
    if(firstWord == '/admin'){
        toggleClassName = 'admin_name';
    } else {
        toggleClassName = 'client_name';
    }

    //console.log(toggleClassName);

    return (
        <div class="heading_title">
            
            <h2 class="titleText">{document.title}</h2>

            <h3 class={toggleClassName}>Hello {name} | {email} </h3>
            
        </div>
    );
};

export default Header;