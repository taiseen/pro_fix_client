import React, { useEffect, useState } from 'react';
import './Section4_User_Reviews.css';
import star from '../../../img/star.png';

const Section4_User_Reviews = () => {

    const [allUsersReviews, setAllUsersReviews] = useState([]);


    useEffect(() => {
        const url = `https://profixdb.herokuapp.com/allReview`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllUsersReviews(data);
            })
            .catch(error => console.log(error))
    }, [])

    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <section class="user_review_area">

            <h2>Our Clients Reviews</h2>

            <div class="user_review_card_container">
                {
                    allUsersReviews.map(review => {
                        const { _id, photo, name, title, description } = review;
                        return (
                            <div class="user_review_card" key={_id}>
                                <div class="user_box">
                                    <div class="user_img">
                                        <img src={photo} alt="" />
                                    </div>
                                    <div class="user_info">
                                        <h4>{name}</h4>
                                        <h6>{title}</h6>
                                    </div>
                                </div>

                                <div class="user_review">
                                    <p>{description}</p>
                                </div>

                                <div class="user_rating">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Section4_User_Reviews;