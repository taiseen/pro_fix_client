import React from 'react';
import '../A_OrderList/A_OrderList.css';
import AdminMenu from '../AdminMenu';
import deleteImg from '../../../../img/admin/delete.png';
import Header from '../../Header/Header';

const D_ManageServices = () => {

    document.title = 'Manage Services';


    const handleMakeAdmin = () => {

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

                            <tr>
                                <td>1</td>
                                <td>Safiul Ahmed Hamim</td>
                                <td>safu@gmail.com</td>
                                <td>Mobile Servicing</td>
                                <td>Credit card</td>
                                <td><img src={deleteImg} class="delete_img" alt="" /></td>
                            </tr>

                        </tbody>

                    </table>
                </section>
            </main>
        </div>
    );
};

export default D_ManageServices;