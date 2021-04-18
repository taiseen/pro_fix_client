import React from 'react';

const SingleService = ({ info }) => {

    const { iconURL, serviceName, servicePrice, serviceDescription } = info;

    return (

        <div className="service_card">
            <img src={iconURL} alt="" />
            <p>{serviceName}</p>
            <p className="service_price">${servicePrice}</p>
            <p>{serviceDescription}</p>
        </div>
        
    );
};

export default SingleService;