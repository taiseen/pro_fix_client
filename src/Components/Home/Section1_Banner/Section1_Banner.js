import React from 'react';
import './Section1_Banner.css';
import banner from '../../../img/banner.jpg';

const Section1_Banner = () => {
    document.title = 'ProFix';

    return (
        <section class="banner_area">
            <div class="title_box">
                <h1>
                    We Fix <br /> Your Electronic Problem
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, delectus ipsa recusandae molestias
                    nulla sit numquam laboriosam magnam porro explicabo?</p>
                <button>Service</button>
            </div>
            <div class="image_box">
                <img src={banner} alt="" />
            </div>
        </section>
    );
};

export default Section1_Banner;