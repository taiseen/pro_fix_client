import React from 'react';
import './B_Service_List.css';
import ClientHeader from '../ClientHeader';

import laptop from '../../../../img/services/laptop.png';
import motherboard from '../../../../img/services/motherboard.png';

const B_Service_List = () => {
    return (
        <div class="main_container_admin">

            <ClientHeader />


            <main class="heading_area">

                <div class="heading_title">
                    <h2>Service List</h2>
                    <h3 class="client_name">User Name</h3>
                </div>

                {/* <!-- Another Section --> */}
                <section class="interaction_area client_service_container">

                    <div class="service_box">
                        <div class="service_status">
                            <img src={laptop} alt="" />
                            <button class="status pending">Pending</button>
                        </div>
                        <div class="service_info">
                            <h4>Laptop Servicing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi corporis dolorem, dolore itaque doloribus.</p>
                        </div>
                    </div>


                    <div class="service_box">
                        <div class="service_status">
                            <img src={motherboard} alt="" />
                            <button class="status done">Done</button>
                        </div>
                        <div class="service_info">
                            <h4>Laptop Servicing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi corporis dolorem, dolore itaque doloribus.</p>
                        </div>
                    </div>

                </section>
            </main>

        </div>
    );
};

export default B_Service_List;