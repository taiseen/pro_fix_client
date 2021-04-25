import React, { useContext, useEffect, useState } from 'react';
import './A_Service.css';
import ClientMenu from '../ClientMenu';
import credit_card from '../../../../img/client/credit_card.png';
import paypal from '../../../../img/client/paypal.png';
import Header from '../../Header/Header';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import { useParams } from 'react-router';


const A_Service = () => {

    document.title = 'Service';
    
    const { serviceId } = useParams();

    console.log('Id send form that page - ', serviceId)


    const [service, setService] = useState({});
    const [loginUser, setLoginUser] = useContext(UserContext);
    const { name, email } = loginUser;


    const { register, handleSubmit } = useForm();

    const onSubmit = (userInfo, e) => {

        userInfo.time = new Date();
        userInfo.status = 'Pending';
        console.log(userInfo);

        const url = 'https://profixdb.herokuapp.com/clientRequestService';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Your Service Listed Successfully.')
                }
            })
            .catch(err => console.log(err));

        e.target.reset();
    }


    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (

        <div class="main_container_admin">

            <ClientMenu />

            <main class="heading_area">

                <Header />

                <section class="interaction_area">

                    <form onSubmit={handleSubmit(onSubmit)} class="user_service_area">

                        <input
                            required
                            type="text"
                            value={name}
                            placeholder="Your Name"
                            class="user_input"
                            {...register("name")} />

                        <input
                            required
                            type="text"
                            value={email}
                            placeholder="Your Email"
                            class="user_input"
                            {...register("email")} />

                        <div className="service_options">

                            <select class="user_input serviceName"
                                {...register("serviceName")} >
                                <option value='Mobile'>Mobile</option>
                                <option value='Laptop'>Laptop</option>
                                <option value='NIC Card'>Nic Card</option>
                                <option value='Sound Card'>Sound Card</option>
                                <option value='Motherboard'>Motherboard</option>
                                <option value='Power Supply'>Power Supply</option>
                            </select>

                            {/* <input
                                required
                                type="text"
                                // value={serviceName}
                                placeholder="Service Name"
                                class="user_input serviceName"
                                {...register("serviceName")} /> */}

                            <input
                                required
                                type="text"
                                //value={servicePrice}
                                placeholder="Service Price"
                                class="user_input servicePrice"
                                {...register("servicePrice")} />
                        </div>

                        <p>Pay with</p>
                        <div class="payment_method">
                            <input
                                type="radio"
                                id="credit_card"
                                value="credit_card"
                                {...register("payment_method")} />
                            <label htmlFor="credit_card">
                                <img src={credit_card} alt="" />Credit Card
                            </label>

                            <input
                                type="radio"
                                id="paypal"
                                value="paypal"
                                {...register("payment_method")} />
                            <label htmlFor="paypal">
                                <img src={paypal} alt="" />Paypal
                            </label>
                        </div>

                        <input
                            required
                            type="text"
                            placeholder="Card Number"
                            class="user_input"
                            {...register("card_number")} />

                        <div class="user_card">
                            <input
                                required
                                type="text"
                                placeholder="MM/YY"
                                class="user_input"
                                {...register("mm_yy")} />

                            <input
                                required
                                type="text"
                                placeholder="CVC"
                                class="user_input"
                                {...register("cvc")} />
                        </div>

                        <div class="user_payment_amount">
                            {/* <p>Your Service Charged will be <strong>$1000</strong></p> */}
                            <button class="client_submit_btn fl_right" type="submit">Pay</button>
                        </div>
                    </form>


                </section>

            </main>
        </div>

    );
};

export default A_Service;