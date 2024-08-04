import React from 'react';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_tj8k22a', 'template_y7wdmu4', form.current, 'qs72OgGnzK9gOWdND')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        })
    };

    return (
        <div className="custom-contact-form">
            <h2 className="text-center pb-4">Contact Me</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        placeholder='Your Name'
                        value={formData.name} required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        placeholder="Email"
                        value={formData.email} required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        name="message" 
                        rows="3" 
                        placeholder="Message" 
                        value={formData.message} required
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-success btn-color py-2 px-3">Send Email</button>
                </div>
            </form>
        </div>
    );
}
