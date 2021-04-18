import React, { useEffect, useState } from 'react';
import './Section3_Dynamic_Service.css';
import SingleService from './SingleService/SingleService';

const Section3_Dynamic_Service = () => {

    const [allServices, setAllServices] = useState([]);

    //console.log(allServices)

    // GET data from server
    useEffect(() => {
        const url = `http://localhost:5000/allServices`;
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
                    allServices.map(service => <SingleService info={service} />)
                }
            </div>

            <div>
                <button>Explore More</button>
            </div>

        </section>

    );
};

export default Section3_Dynamic_Service;