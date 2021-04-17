import React from 'react';
import './B_AddService.css';
import AdminHeader from '../AdminHeader';
import uploadImg from '../../../../img/admin/upload.png';

const B_AddService = () => {
    return (
        <div class="main_container_admin">

            <AdminHeader />

            <main class="heading_area">
                <div class="heading_title">
                    <h2>Add Service</h2>
                    <h3 class="admin_name">Admin Name</h3>
                </div>

                {/* <!-- Another Section --> */}
                <section class="interaction_area">

                    <div class="service_input_area">

                        <div class="input_flex">
                            <label htmlFor="service_name">Service Title</label>
                            <input id="service_name" type="text" required placeholder="Enter Service Name" />
                        </div>

                        <div class="input_flex">

                            <label>Add Book Cover Photo</label>
                            <label for="file" class="inputFileLabel">
                                <img src={uploadImg} alt="" />
                            Upload image</label>
                            <input id="file" type="file" required class="inputFile" accept="image/*" />
                        </div>

                        <div class="input_flex">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" rows="8">Enter Description</textarea>
                        </div>

                        <div>
                            <button class="btn_submit" type="submit">Submit</button>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default B_AddService;