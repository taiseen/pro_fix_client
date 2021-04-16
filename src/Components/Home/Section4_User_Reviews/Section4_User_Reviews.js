import React from 'react';
import './Section4_User_Reviews.css';
import star from '../../../img/star.png';
import man1 from '../../../img/user_img/man1.jpg';
import man2 from '../../../img/user_img/man2.jpg';
import woman1 from '../../../img/user_img/woman1.jpg';
import woman2 from '../../../img/user_img/woman2.jpg';

const Section4_User_Reviews = () => {

    return (
        <section class="user_review_area">

            <h2>Our Clients Reviews</h2>

            <div class="user_review_card_container">

                <div class="user_review_card">

                    <div class="user_box">

                        <div class="user_img">
                            <img src={man1} alt="" />
                        </div>

                        <div class="user_info">
                            <h3>Farhan Khan</h3>
                            <h5>CEO, IT Soft</h5>
                        </div>
                    </div>

                    <div class="user_review">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim suscipit? Veniam
                        dolorum
                            earum cum doloribus iste voluptate tempore voluptatibus.</p>
                    </div>
                    <div class="user_rating">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>

                </div>

                <div class="user_review_card">

                    <div class="user_box">

                        <div class="user_img">
                            <img src={woman1} alt="" />
                        </div>

                        <div class="user_info">
                            <h3>Farhan Khan</h3>
                            <h5>CEO, IT Soft</h5>
                        </div>
                    </div>

                    <div class="user_review">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim suscipit? Veniam
                        dolorum
                            earum cum doloribus iste voluptate tempore voluptatibus.</p>
                    </div>
                    <div class="user_rating">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />

                    </div>
                </div>

                <div class="user_review_card">

                    <div class="user_box">

                        <div class="user_img">
                            <img src={man2} alt="" />
                        </div>

                        <div class="user_info">
                            <h3>Farhan Khan</h3>
                            <h5>CEO, IT Soft</h5>
                        </div>
                    </div>

                    <div class="user_review">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim suscipit? Veniam
                        dolorum
                            earum cum doloribus iste voluptate tempore voluptatibus.</p>
                    </div>
                    <div class="user_rating">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>

                <div class="user_review_card">
                    <div class="user_box">
                        <div class="user_img">
                            <img src={woman2} alt="" />
                        </div>

                        <div class="user_info">
                            <h3>Farhan Khan</h3>
                            <h5>CEO, IT Soft</h5>
                        </div>
                    </div>

                    <div class="user_review">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim suscipit? Veniam
                        dolorum
                            earum cum doloribus iste voluptate tempore voluptatibus.</p>
                    </div>
                    <div class="user_rating">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section4_User_Reviews;