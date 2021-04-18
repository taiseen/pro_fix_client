import React, { useContext, useEffect, useState } from 'react';
import './B_Service_List.css';
import ClientMenu from '../ClientMenu';
import Header from '../../Header/Header';
import { UserContext } from '../../../../App';
import SingleService from './SingleService/SingleService';
import { Spinner } from 'react-bootstrap';

const B_Service_List = () => {

    document.title = 'Service List';

    const [loginUser, setLoginUser] = useContext(UserContext);
    const [requestedService, setRequestedService] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(requestedService)

    useEffect(() => {
        const url = `https://profixdb.herokuapp.com/yourServiceList?email=${loginUser.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setRequestedService(data)
            })
            .catch(error => console.log(error))
    }, []);

    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <div class="main_container_admin">

            <ClientMenu />

            <main class="heading_area">

                <Header />


                {/* Another Section */}
                <section class="interaction_area client_service_container">
                    {
                        loading ?
                            <Spinner animation="border" variant="danger" /> :
                            null
                    }
                    {
                        requestedService.map(service => <SingleService info={service} />)
                    }
                </section>

            </main>

        </div>
    );
};

export default B_Service_List;