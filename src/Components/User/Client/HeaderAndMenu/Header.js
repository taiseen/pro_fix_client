import React, { useContext } from 'react';
import { UserContext } from '../../../../App';

const Header = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);


    return (
        <div class="heading_title">
            <h2>{document.title}</h2>
            <h3 class="client_name">Hello {loginUser.name} | {loginUser.email} </h3>
        </div>
    );
};

export default Header;