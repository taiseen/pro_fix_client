import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import A_Service from '../../User/Client/A_Service/A_Service';
import './Section3_Dynamic_Service.css';

const Section3_Dynamic_Service = () => {

    const [allServices, setAllServices] = useState([]);
    const [userClickService, setUserClickService] = useState({});

    console.log(userClickService);

    useEffect(() => {
        const url = `https://profixdb.herokuapp.com/allServices`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
            .catch(error => console.log(error))
    }, [])

    const handleClick = (service) => {

        //console.log(service);

        setUserClickService(service);
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
                            <div className="service_card" key={_id} onClick={() => handleClick(service)}>
                                <img src={iconURL} alt="" />
                                <p>{serviceName}</p>
                                <p className="service_price">${servicePrice}</p>
                                <p>{serviceDescription}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div>
                <button>Explore More</button>
            </div>


            <div className="displayNone">

                <A_Service userClick={userClickService} />

            </div>



        </section>

    );
};

export default Section3_Dynamic_Service;