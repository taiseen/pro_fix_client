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
import LoginPage from './Components/LoginPage/LoginPage';

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
                        <LoginPage />
                    </Route>

                    <Route path="/:">

                    </Route>

                    <Route path="/client">
                        <Home />
                    </Route>

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