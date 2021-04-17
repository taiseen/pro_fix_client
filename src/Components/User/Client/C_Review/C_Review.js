import React from 'react';
import '../A_Service/A_Service.css';
import ClientHeader from '../ClientHeader';

const C_Review = () => {
    return (
        <div class="main_container_admin">


            <ClientHeader />

            <main class="heading_area">

                <div class="heading_title">
                    <h2>Review</h2>
                    <h3 class="client_name">User Name</h3>
                </div>

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