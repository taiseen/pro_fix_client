import React from 'react';

import laptop from '../../../../../img/services/laptop.png';
import motherboard from '../../../../../img/services/motherboard.png';
import soundCard from '../../../../../img/services/sound-card.png';
import powerSupply from '../../../../../img/services/power-supply.png';
import smartPhone from '../../../../../img/services/smartphone.png';

const SingleService = ({ info }) => {

    const { serviceName , status } = info;

    let contextImg;
    if( serviceName == ('Laptop')){
        contextImg = laptop;
    } else if( serviceName == 'Motherboard'){
        contextImg = motherboard;
    } else if( serviceName == 'Soundcard'){
        contextImg = soundCard;
    } else if( serviceName == 'Powersupply'){
        contextImg = powerSupply;
    } else if( serviceName == 'Phone'){
        contextImg = smartPhone;
    } else if( serviceName == 'Mobile'){
        contextImg = smartPhone;
    }

    console.log(contextImg);

    return (
        <div class="service_box">

            <div class="service_status">
                <img src={contextImg} alt="" />
                <button class="status pending">{status}</button>
            </div>

            <div class="service_info">
                <h4>{serviceName}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi corporis dolorem, dolore itaque doloribus.</p>
            </div>
        </div>
    );
};

export default SingleService;