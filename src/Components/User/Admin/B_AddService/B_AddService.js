import React, { useState } from 'react';
import './B_AddService.css';
import AdminMenu from '../AdminMenu';
import uploadImg from '../../../../img/admin/upload.png';
import Header from '../../Header/Header';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const B_AddService = () => {

    document.title = 'Add Service';

    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [iconURL, setIconURL] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceInfo = {
            serviceName,
            servicePrice,
            serviceDescription,
            iconURL,
        }
        console.log(serviceInfo);


        setLoading(true);
        const url = `https://profixdb.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceInfo)
        })
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                if (result) {
                    alert('Service Added Successfully...');
                }
            })
            .catch(err => console.log(err));

        // clear all input values from input field...
        e.target.reset();
    }

    const handleImageUpload = (event) => {
        //console.log(event.target.files[0]);

        const imageData = new FormData();
        imageData.set('key', 'e6a6e2fab17e156f5aec357902880cea');
        imageData.append('image', event.target.files[0]);
        setLoading(true);

        // uploaded to Imgbb website...
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                //console.log(res.data.data.display_url);
                setLoading(false);
                if (res) {
                    alert('Picture Uploaded Successfully...');
                }
                setIconURL(res.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.response.request._response);
            });

    }


    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (

        <div class="main_container_admin">

            <AdminMenu />

            <main class="heading_area">

                <Header />

                {/* Another Section */}
                <section class="interaction_area">

                    <form onSubmit={handleSubmit} method="post" class="service_input_area">

                        <div class="input_flex">
                            <label htmlFor="service_name">Service Title</label>
                            <input
                                id="service_name"
                                type="text"
                                required
                                placeholder="Enter Service Name"
                                onChange={event => setServiceName(event.target.value)} />
                        </div>

                        <div class="input_flex">
                            <label htmlFor="service_price">Price</label>
                            <input
                                id="service_price"
                                type="text"
                                required
                                placeholder="Enter Price $$$"
                                onChange={event => setServicePrice(event.target.value)} />
                        </div>

                        <div class="input_flex">
                            <label htmlFor="description">Description</label>
                            <textarea
                                rows="8"
                                id="description"
                                placeholder="Enter Description"
                                onChange={event => setServiceDescription(event.target.value)}>

                            </textarea>
                        </div>

                        <div class="input_flex">

                            <label>Add Service Icon</label>
                            <label htmlFor="file" class="inputFileLabel">
                                <img src={uploadImg} alt="" /> Upload Icon
                            </label>

                            <input
                                required
                                id="file"
                                type="file"
                                class="inputFile"
                                accept="image/*"
                                onChange={handleImageUpload} />

                        </div>

                        <div>
                            <button class="btn_submit" type="submit">Submit</button>
                        </div>
                    </form>

                    <span className="spinnerLoading">
                        {
                            loading ?
                                <Spinner animation="border" variant="danger" /> :
                                null
                        }
                    </span>

                </section>

            </main>

        </div>

    );
};

export default B_AddService;