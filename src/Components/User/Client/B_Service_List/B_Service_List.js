import React from 'react';
import './B_Service_List.css';
import Menu from '../HeaderAndMenu/Menu';

import laptop from '../../../../img/services/laptop.png';
import motherboard from '../../../../img/services/motherboard.png';
import Header from '../HeaderAndMenu/Header';

const B_Service_List = () => {

    document.title = 'Service List';

    return (
        <div class="main_container_admin">

            <Menu />

            <main class="heading_area">

                <Header />


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