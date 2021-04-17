import React, { useContext } from 'react';
import './A_OrderList.css';
import AdminMenu from '../AdminMenu';
import { UserContext } from '../../../../App';
import Header from '../../Header/Header';

const A_OrderList = () => {
    document.title = 'Order List';

    const [loginUser, setLoginUser] = useContext(UserContext);


    return (
        <div class="main_container_admin">

            <AdminMenu/>

            <main class="heading_area">

            <Header/>

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
                                <td>
                                    <select name="" id="options">
                                        <option value="" class="pending">Pending</option>
                                        <option value="" class="on_going">On Going</option>
                                        <option value="" class="done">Done</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Safiul Ahmed Hamim</td>
                                <td>safu@gmail.com</td>
                                <td>Mobile Servicing</td>
                                <td>Credit card</td>
                                <td>
                                    <select name="" id="">
                                        <option value="" class="pending">Pending</option>
                                        <option value="" class="on_going">On Going</option>
                                        <option value="" class="done">Done</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Safiul Ahmed Hamim</td>
                                <td>safu@gmail.com</td>
                                <td>Mobile Servicing</td>
                                <td>Credit card</td>
                                <td>
                                    <select name="" id="">
                                        <option value="" class="pending">Pending</option>
                                        <option value="" class="on_going">On Going</option>
                                        <option value="" class="done">Done</option>
                                    </select>
                                </td>
                            </tr>


                        </tbody>

                    </table>
                </section>
            </main>

        </div>
    );
};

export default A_OrderList;