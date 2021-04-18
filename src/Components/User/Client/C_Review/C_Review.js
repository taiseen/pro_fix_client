import React, { useContext } from 'react';
import '../A_Service/A_Service.css';
import ClientMenu from '../ClientMenu';
import Header from '../../Header/Header';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';


const C_Review = () => {

    document.title = 'Review';

    const [loginUser, setLoginUser] = useContext(UserContext);

    const { register, handleSubmit } = useForm();

    const onSubmit = (userInfo, e) => {

        userInfo.photo = loginUser.photo;
        //console.log(userInfo)

        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('Thanks For Your Review...');
                }
            })
            .catch(err => console.log(err));

        e.target.reset();
    }


    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <div class="main_container_admin">

            <ClientMenu />

            <main class="heading_area">

                <Header />

                {/* Another Section */}
                <section class="interaction_area">

                    <form onSubmit={handleSubmit(onSubmit)} class="review_area">

                        <input
                            required
                            type="text"
                            placeholder="Your name"
                            class="user_input"
                            {...register("name")}
                        />

                        <input
                            required
                            type="text"
                            placeholder="Company Name | Designation"
                            class="user_input"
                            {...register("title")}
                        />

                        <textarea
                            rows="10"
                            cols="40"
                            class="user_input"
                            placeholder="Share Your Review With Us "
                            {...register("description")}
                        >
                        </textarea>

                        <button class="client_submit_btn" type="submit">Submit</button>

                    </form>
                </section>
            </main>
        </div>
    );
};

export default C_Review;