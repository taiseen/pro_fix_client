import React from 'react';
import '../A_Service/A_Service.css';
import Menu from '../HeaderAndMenu/Menu';
import Header from '../HeaderAndMenu/Header';


const C_Review = () => {

    document.title = 'Review';

    return (
        <div class="main_container_admin">


            <Menu />

            <main class="heading_area">

                <Header />

                {/* <!-- Another Section --> */}
                <section class="interaction_area">

                    <form action="" class="review_area">

                        <input type="text" placeholder="Your name" required class="user_input" />
                        <input type="text" placeholder="Company Name" required class="user_input" />
                        <textarea name="" id="" rows="10" cols="40" class="user_input">Description</textarea>
                        <button class="client_submit_btn" type="submit">Submit</button>

                    </form>


                </section>
            </main>
        </div>
    );
};

export default C_Review;