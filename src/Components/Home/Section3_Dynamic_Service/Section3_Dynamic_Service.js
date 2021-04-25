import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Section3_Dynamic_Service.css';

const Section3_Dynamic_Service = () => {

    const [allServices, setAllServices] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const url = `https://profixdb.herokuapp.com/allServices`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
            .catch(error => console.log(error))
    }, [])

    const handleClick = (id) => {
        // history.push(`/client/service/${id}`)
        // console.log(`/client/service/${id}`)
    }


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

                        const { _id, iconURL, serviceName, servicePrice, serviceDescription } = service;

                        return (

                            <Link to={`/client/service/${service._id}`} key={_id}  >

                                {/* onClick={() => handleClick(service._id)} */}

                                <div className="service_card info">
                                    <img src={iconURL} alt="" />
                                    <p>{serviceName}</p>
                                    <p className="service_price">${servicePrice}</p>
                                    <p>{serviceDescription}</p>
                                </div>
                            </Link>

                        )
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