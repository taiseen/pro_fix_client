import React, { useState } from 'react';
import './C_MakeAdmin.css';
import AdminMenu from '../AdminMenu';
import Header from '../../Header/Header';

const C_MakeAdmin = () => {

    document.title = 'Make Admin';

    const [adminEmail, setAdminEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (adminEmail) {

            const email = { adminEmail };

            const url = `https://profixdb.herokuapp.com/addAdmin`;
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(email)
            })
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        alert('Admin Added Successfully...');

                    }
                })
                .catch(err => console.log(err));
        }

        // clear input values from input field...
        e.target.reset();
    }



    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <div class="main_container_admin">

            <AdminMenu />

            <main class="heading_area">

                <Header />

                {/* <!-- Another Section --> */}
                <section class="interaction_area">

                    <div class="admin_making_area">


                        <form onSubmit={handleSubmit} method="post" class="admin_making_input">
                            <div class="input_flex">
                                <label htmlFor="admin_email">Email</label>
                                <input
                                    required
                                    type="email"
                                    id="admin_email"
                                    placeholder="jon@gmail.com"
                                    onChange={event => setAdminEmail(event.target.value)} />
                            </div>

                            <div>
                                <button class="make_admin_submit_btn" type="submit">Submit</button>
                            </div>
                        </form>


                    </div>
                </section>
            </main>

        </div>
    );
};

export default C_MakeAdmin;