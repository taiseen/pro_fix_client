import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { UserContext } from '../../../App';

const Header = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);
    //let [toggleClassName, setToggleClassName] = useState('');

    const location = useLocation();
    const firstWord = location.pathname.slice(0, 6);

    let toggleClassName ;
    if(firstWord == '/admin'){
        //setToggleClassName('admin_name');
        toggleClassName = 'admin_name';
    } else {
        //setToggleClassName('client_name')
        toggleClassName = 'client_name';
    }

    //console.log(toggleClassName);

    return (
        <div class="heading_title">
            
            <h2 class="titleText">{document.title}</h2>

            <h3 class={toggleClassName}>Hello {loginUser.name} | {loginUser.email} </h3>
            
        </div>
    );
};

export default Header;