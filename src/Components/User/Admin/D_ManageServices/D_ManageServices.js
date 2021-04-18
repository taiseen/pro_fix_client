import React, { useEffect, useState } from 'react';
import '../A_OrderList/A_OrderList.css';
import AdminMenu from '../AdminMenu';
import Header from '../../Header/Header';

import deleteImg from '../../../../img/admin/delete.png';
import { Spinner } from 'react-bootstrap';

const D_ManageServices = () => {

    document.title = 'Manage Services';

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

    }, [allRequestedService]); //allRequestedService


    const handleDelete = (id) => {
        const userClick = window.confirm('Are you sure to delete this record?');
        if (userClick) {
            const url = `https://profixdb.herokuapp.com/deleteClientService/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data) {
                        alert('Delete Successfully...')
                    }
                });
        }
    }


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
                                allRequestedService.map(service => {

                                    const { _id, name, email, serviceName, payment_method } = service;

                                    return <tr key={_id}>
                                        <td>{1}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{serviceName}</td>
                                        <td>{payment_method}</td>
                                        <td><img src={deleteImg} onClick={() => handleDelete(service._id)} class="delete_img" alt="" /></td>
                                    </tr>;
                                })
                            }

                        </tbody>

                    </table>
                </section>
            </main>
        </div>
    );
};

export default D_ManageServices;