import React from 'react';
import './C_MakeAdmin.css';
import AdminHeader from '../AdminHeader';

const C_MakeAdmin = () => {
    return (
        <div class="main_container_admin">

        <AdminHeader/>

        <main class="heading_area">

            <div class="heading_title">
                <h2>Make Admin</h2>
                <h3 class="admin_name">Admin Name</h3>
            </div>

            {/* <!-- Another Section --> */}
            <section class="interaction_area">

                <div class="admin_making_area">

                    <div class="admin_making_input">
                        <div class="input_flex">
                            <label htmlFor="admin_email">Email</label>
                            <input id="admin_email" type="text" required placeholder="jon@gmail.com" />
                        </div>

                        <div>
                            <button class="make_admin_submit_btn" type="submit">Submit</button>
                        </div>

                    </div>
                </div>
            </section>
        </main>

    </div>
    );
};

export default C_MakeAdmin;