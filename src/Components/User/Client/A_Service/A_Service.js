import React from 'react';
import './A_Service.css';
import ClientHeader from '../ClientHeader';

import credit_card from '../../../../img/client/credit_card.png';
import paypal from '../../../../img/client/paypal.png';

const A_Service = () => {
    return (
        <div class="main_container_admin">

            <ClientHeader />

            <main class="heading_area">

                <div class="heading_title">
                    <h2>Service</h2>
                    <h3 class="client_name">User Name</h3>
                </div>

                <section class="interaction_area">

                    <form action="" class="user_service_area">

                        <input type="text" placeholder="Your Name" required class="user_input" />
                        <input type="text" placeholder="Your Email" required class="user_input" />
                        <input type="text" placeholder="Service Name" required class="user_input" />

                        <p>Pay with</p>
                        <div class="payment_method">
                            <input type="radio" id="credit_card" name="payment_method" value="credit_card" />
                            <label for="credit_card">
                                <img src={credit_card} alt="" />Credit Card
                        </label>

                            <input type="radio" id="paypal" name="payment_method" value="paypal" />
                            <label for="paypal">
                                <img src={paypal} alt="" />Paypal
                        </label>
                        </div>

                        <input type="text" placeholder="Card Number" required class="user_input" />
                        <div class="user_card">
                            <input type="text" placeholder="MM/YY" required class="user_input" />
                            <input type="text" placeholder="CVC" required class="user_input" />
                        </div>

                        <div class="user_payment_amount">
                            <p>Your Service Charged will be <strong>$1000</strong></p>
                            <button class="client_submit_btn fl_right" type="submit">Pay</button>
                        </div>
                    </form>


                </section>
            </main>
        </div>
    );
};

export default A_Service;