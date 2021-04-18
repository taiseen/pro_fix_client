import React from 'react';
import star from '../../../../img/star.png';

const SingleUserReview = ({ info }) => {

    const { photo, name, title, description } = info;

    
    return (

        <div class="user_review_card">
            <div class="user_box">
                <div class="user_img">
                    <img src={photo} alt="" />
                </div>
                <div class="user_info">
                    <h3>{name}</h3>
                    <h5>{title}</h5>
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
    );
};

export default SingleUserReview;