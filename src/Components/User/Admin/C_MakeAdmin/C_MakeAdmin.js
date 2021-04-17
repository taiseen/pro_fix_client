import React from 'react';
import './C_MakeAdmin.css';
import AdminMenu from '../AdminMenu';
import Header from '../../Header/Header';

const C_MakeAdmin = () => {

    document.title = 'Make Admin';

    return (
        <div class="main_container_admin">

            <AdminMenu />

            <main class="heading_area">

                <Header />

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