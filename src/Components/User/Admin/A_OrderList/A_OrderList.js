import React, { useEffect, useState } from 'react';
import './A_OrderList.css';
import AdminMenu from '../AdminMenu';
import Header from '../../Header/Header';
import { Spinner } from 'react-bootstrap';


const A_OrderList = () => {
    document.title = 'Order List';

    const [allRequestedService, setAllRequestedService] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(allRequestedService)

    useEffect(() => {
        const url = `https://profixdb.herokuapp.com/allServiceRequest`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setAllRequestedService(data)
            })
            .catch(error => console.log(error))

    }, []);


    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <div class="main_container_admin">

            <AdminMenu />

            <main class="heading_area">

                <Header />

                <section class="interaction_area">

                    <table class="admin_table_service_list">
                        <thead>
                            <tr class="table_header">
                                <th>No</th>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Pay With</th>
                                <th>Status</th>
                            </tr>
                        </thead>


                        <tbody>
                            {
                                loading
                                    ? <Spinner animation="border" variant="danger" />
                                    : allRequestedService.map((service, index) => {

                                        const { name, email, serviceName, payment_method, status } = service;

                                        return (
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{serviceName}</td>
                                                <td>{payment_method}</td>
                                                <td>
                                                    <select name="" id="options" value={status}>
                                                        <option value={status} class="pending">Pending</option>
                                                        <option value={status} class="on_going">On Going</option>
                                                        <option value={status} class="done">Done</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>

                    </table>
                </section>
            </main>

        </div>
    );
};

export default A_OrderList;