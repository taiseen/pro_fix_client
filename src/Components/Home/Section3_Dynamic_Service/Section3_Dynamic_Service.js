import React, { useEffect, useState } from 'react';
import './Section3_Dynamic_Service.css';

const Section3_Dynamic_Service = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        const url = `https://profixdb.herokuapp.com/allServices`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
            .catch(error => console.log(error))
    }, [])


    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <section className="service_area">

            <div className="static_title service_title">
                <h4>Services</h4>
                <h5>We are an agency to give you <br /> all kind of digital electronic supports</h5>
            </div>

            <div className="service_container">
                {
                    allServices.map(service => {

                        const { iconURL, serviceName, servicePrice, serviceDescription } = service;

                        return <div className="service_card">
                            <img src={iconURL} alt="" />
                            <p>{serviceName}</p>
                            <p className="service_price">${servicePrice}</p>
                            <p>{serviceDescription}</p>
                        </div>
                    })
                }
            </div>

            <div>
                <button>Explore More</button>
            </div>

        </section>

    );
};

export default Section3_Dynamic_Service;