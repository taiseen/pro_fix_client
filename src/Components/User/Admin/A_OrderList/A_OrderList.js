import React, { useEffect, useState } from 'react';
import './A_OrderList.css';
import AdminMenu from '../AdminMenu';
import Header from '../../Header/Header';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const A_OrderList = () => {
    document.title = 'Order List';

    const [allRequestedService, setAllRequestedService] = useState([]);
    const [loading, setLoading] = useState(true);
    
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

    const handleStatus = (event) => {

        const id_status = event.target.value;
        const data = id_status.split(' ');

        const id = data[0];
        const status = data[1];

        updateStatus(id, status);
    }

    const updateStatus = (id, status) => {
        
        const url = `https://profixdb.herokuapp.com/update/${id}`;
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify( { status } ),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
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
                                loading
                                    ? <Spinner animation="border" variant="danger" />
                                    : allRequestedService.map((service, index) => {

                                        const { _id, name, email, serviceName, payment_method, status } = service;
                                        
                                        return (
                                            <tr key={_id}>
                                                <td>{index + 1}</td>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{serviceName}</td>
                                                <td>{payment_method}</td>
                                                <td>
                                                    <select name="serviceStatus" onChange={handleStatus} >
                                                        <option class="pending" value={`${_id} Pending`}>Pending</option>
                                                        <option class="on_going" value={`${_id} On-Going`}>On Going</option>
                                                        <option class="done" value={`${_id} Done`}>Done</option>
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