import React, { useState } from 'react'
import "../../contact.css";
// import ContactImg from "../assets/what-we-do.png";
import ContactBg from "../assets/ContactBg.jpg";
import axios from 'axios';

import {
    SparklesIcon,
} from "@heroicons/react/24/outline";


function Contact() {
    const initialState = {
        name: '',
        mobileNumber: '',
        email: '',
        service: '',
        message: '',
    }

    const [userDetails, setUserDetails] = useState(initialState);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userDetails);

        try {
            const body = userDetails
            console.log(body)
            const result = await axios.post('http://localhost:8500/leads', { body })
            result.status === 200 && setSuccess('Thank you for submitting the query');
            setUserDetails(initialState)

        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (

        <div className="container-fluid bg">
            <div className="container">
                <div className="form-container">
                    <h2 className="form-title text-center card-heading">
                        <span className="about-text">Contact Us <SparklesIcon className="icon02" /></span>
                    </h2>
                    <form className=''>
                        <div className="mb-3">
                            <label for="name" className="form-label input-headings" >Name</label>
                            <input type="text" className="form-control input-custom" name='name' id="name" placeholder="Enter your name" value={userDetails.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="mobile" className="form-label input-headings">Mobile Number</label>
                            <input type="tel" name='mobileNumber' className="form-control input-custom" id="mobile" value={userDetails.mobileNumber} placeholder="Enter your mobile number" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label input-headings">Email address</label>
                            <input type="email" value={userDetails.email} name='email' className="form-control " id="email input-custom" placeholder="Enter your email" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="dropdown" className="form-label input-headings">Service interested in</label>
                            <select name='service' className="form-select" id="dropdown" value={userDetails.service} onChange={handleChange}>
                                <option value={'Project Identification'} selected>Project Identification</option>
                                <option value="Pre Investment Feasibility Studies">Pre Investment Feasibility Studies</option>
                                <option value="Detailed Project Report">Detailed Project Report</option>
                                <option value="Technical & Financial Appraisal">Technical & Financial Appraisal</option>
                                <option value="Valuation Studies for Real Estate">Valuation Studies for Real Estate</option>
                                <option value="Techno Economic Viability Reports">Techno Economic Viability Reports</option>
                                <option value="Land Allotment Documentation">Land Allotment Documentation</option>
                                <option value="Chartered Engineering Certificates">Chartered Engineering Certificates</option>
                                <option value="Chartered Accountant Certificates">Chartered Accountant Certificates</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="message" className="form-label input-headings">Message</label>
                            <textarea value={userDetails.message} name='message' className="form-control" id="message" rows="3" placeholder="Enter your message" onChange={handleChange}></textarea>
                        </div>
                        {error && <span class="alert alert-danger" role="alert">{error}</span>}
                        {success && <span class="alert alert-success" role="alert">{success}</span>}
                        <button className="btn btn-custom btn-primary w-100" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>


            {/* form container end */}
        </div>
    )
}

export default Contact;
