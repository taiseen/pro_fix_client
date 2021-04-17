import React from 'react';
import './Section3_Dynamic_Service.css';

import laptop from '../../../img/services/laptop.png';
import motherboard from '../../../img/services/motherboard.png';
import repair from '../../../img/services/repair.png';
import sound_card from '../../../img/services/sound-card.png';

const Section3_Dynamic_Service = () => {
    return (
        <section className="service_area">

            <div className="static_title service_title">
                <h4>Services</h4>
                <h5>We are an agency to give you <br /> all kind of digital electronic supports</h5>
            </div>

            <div className="service_container">

                <div className="service_card">
                    <img src={laptop} alt="" />
                    <p>Laptop Servicing</p>
                    <p className="service_price">$299</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, hic.</p>
                </div>

                <div className="service_card">
                    <img src={motherboard} alt="" />
                    <p>Motherboard Servicing</p>
                    <p className="service_price">$299</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, hic.</p>
                </div>

                <div className="service_card">
                    <img src={repair} alt="" />
                    <p>Phone Servicing</p>
                    <p className="service_price">$299</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, hic.</p>
                </div>

                <div className="service_card">
                    <img src={sound_card} alt="" />
                    <p>Sound Card Servicing</p>
                    <p className="service_price">$299</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, hic.</p>
                </div>

            </div>

            <div>
                <button>Explore More</button>
            </div>
        </section>

    );
};

export default Section3_Dynamic_Service;