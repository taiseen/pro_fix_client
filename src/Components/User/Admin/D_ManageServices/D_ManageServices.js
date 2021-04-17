import React from 'react';
import '../A_OrderList/A_OrderList.css';
import AdminHeader from '../AdminHeader';
import deleteImg from '../../../../img/admin/delete.png';

const D_ManageServices = () => {
    return (
        <div class="main_container_admin">

            <AdminHeader />

            <main class="heading_area">

                <div class="heading_title">
                    <h2>Manage Services</h2>
                    <h3 class="admin_name">Admin Name</h3>
                </div>

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
                                <td><img src={deleteImg} alt="" /></td>
                            </tr>

                        </tbody>

                    </table>
                </section>
            </main>
        </div>
    );
};

export default D_ManageServices;