import React from 'react';
import './Section2_Static_Service.css';

import mobile1 from '../../../img/mobile1.jpg';
import mobile2 from '../../../img/mobile2.jpg';
import laptop from '../../../img/laptop.jpeg';


const Section2_Static_Service = () => {
    return (
        <section class="running_service_area">

            <div class="static_title">
                <h4>Running Services</h4>
                <h5>Discover out running services which may helpful for you</h5>
            </div>

            <div class="service_thumbnail_container">

                <div class="service_thumbnail hover_effect">
                    <figure><img src={mobile1} alt="" /></figure>
                    <p class="title">Smart Phone Servicing</p>
                    <p> Dhaka, Bangladesh</p>
                </div>

                <div class="service_thumbnail hover_effect">
                    <figure><img src={laptop} alt="" /></figure>
                    <p class="title">Laptop Servicing</p>
                    <p> Dhaka, Bangladesh</p>
                </div>

                <div class="service_thumbnail hover_effect">
                    <figure> <img src={mobile2} alt="" /></figure>
                    <p class="title">Smart Phone Servicing</p>
                    <p> Dhaka, Bangladesh</p>
                </div>
            </div>
        </section>
    );
};

export default Section2_Static_Service;