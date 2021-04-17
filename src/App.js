import React, { createContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Components/FireBase/FireBaseConfig';
import Login from './Components/Login/Login';
import A_OrderList from './Components/User/Admin/A_OrderList/A_OrderList';
import B_AddService from './Components/User/Admin/B_AddService/B_AddService';
import C_MakeAdmin from './Components/User/Admin/C_MakeAdmin/C_MakeAdmin';
import D_ManageServices from './Components/User/Admin/D_ManageServices/D_ManageServices';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

// 11-March-2021
// after finish ==>> attach output-ui
// Last focus on README file...

export const UserContext = createContext();

const App = () => {

    const [loginUser, setLoginUser] = useState();

    return (

        <UserContext.Provider value={[loginUser, setLoginUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/:">

                    </Route>

                    {/* Admin Route ==> START */}
                    <Route path="/admin/orderList">
                        <A_OrderList />
                    </Route>
                    <Route path="/admin/add_service">
                        <B_AddService />
                    </Route>
                    <Route path="/admin/make_admin">
                        <C_MakeAdmin />
                    </Route>
                    <Route path="/admin/manage_services">
                        <D_ManageServices />
                    </Route>
                    {/* Admin Route ==> END */}




                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;