import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import A_OrderList from './Components/User/Admin/A_OrderList/A_OrderList';
import B_AddService from './Components/User/Admin/B_AddService/B_AddService';
import C_MakeAdmin from './Components/User/Admin/C_MakeAdmin/C_MakeAdmin';
import D_ManageServices from './Components/User/Admin/D_ManageServices/D_ManageServices';
import A_Service from './Components/User/Client/A_Service/A_Service';
import B_Service_List from './Components/User/Client/B_Service_List/B_Service_List';
import C_Review from './Components/User/Client/C_Review/C_Review';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext({});

// https://profixdb.web.app 

const App = () => {

    const [loginUser, setLoginUser] = useState({});

    return (

        <UserContext.Provider value={[loginUser, setLoginUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/login/:role">
                        <Login />
                    </Route>

                    {/* Admin Route ==> START */}
                    <PrivateRoute path="/admin/order_list">
                        <A_OrderList />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/add_service">
                        <B_AddService />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/make_admin">
                        <C_MakeAdmin />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/manage_services">
                        <D_ManageServices />
                    </PrivateRoute>
                    {/* Admin Route ==> END */}

                    {/* Client Route ==> START */}
                    <PrivateRoute path="/client/service">
                        <A_Service />
                    </PrivateRoute>
                    <PrivateRoute path="/client/service/:serviceId">
                        <A_Service />
                    </PrivateRoute>
                    <PrivateRoute path="/client/service_list">
                        <B_Service_List />
                    </PrivateRoute>
                    <PrivateRoute path="/client/review">
                        <C_Review />
                    </PrivateRoute>
                    {/* Client Route ==> END */}

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