import React, { useEffect, useState } from 'react';
import './Section4_User_Reviews.css';
import SingleUserReview from './SingleUserReview/SingleUserReview';

const Section4_User_Reviews = () => {

    const [allUsersReviews, setAllUsersReviews] = useState([]);

    //console.log(allUsersReviews);

    useEffect(() => {
        const url = `https://profixdb.herokuapp.com/allReview`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllUsersReviews(data);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <section class="user_review_area">

            <h2>Our Clients Reviews</h2>

            <div class="user_review_card_container">
                {
                    allUsersReviews.map(review => <SingleUserReview info={review} />)
                }
            </div>
        </section>
    );
};

export default Section4_User_Reviews;