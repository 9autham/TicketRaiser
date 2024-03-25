import React from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase'; // Import the Firestore instance from firebase.js
import 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore'; // Import collection and addDoc from firestore

const Contact = () => {
    const notifysuccess = (message) => {
        toast.success(message);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("contact_form_name").value;
        const email = document.getElementById("contact_form_email").value;
        const phone = document.getElementById("contact_form_phone").value;
        const message = document.getElementById("contact_form_message").value;

        // Add form data to Firestore
        try {
            const docRef = await addDoc(collection(db, "contact_messages"), {
                name: name,
                email: email,
                phone: phone,
                message: message,
            });
            console.log("Document written with ID: ", docRef.id);
            notifysuccess("Message sent successfully");
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error("Error sending message");
        }
    }

    return (
        <div className="contact-container">
            {/* Contact Info */}
            <div className="contact-info">
                <div className="contact-info-item">
                    <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="Phone Icon" />
                    <div>
                        <div className="contact-info-title">Phone</div>
                        <div className="contact-info-text">+91 9876 543 2198</div>
                    </div>
                </div>
                <div className="contact-info-item">
                    <img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="Email Icon" />
                    <div>
                        <div className="contact-info-title">Email</div>
                        <div className="contact-info-text">contact@bbbootstrap.com</div>
                    </div>
                </div>
                <div className="contact-info-item">
                    <img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="Address Icon" />
                    <div>
                        <div className="contact-info-title">Address</div>
                        <div className="contact-info-text">298, Menlo Park, CA, USA</div>
                    </div>
                </div>
            </div>
            {/* Contact Form */}
            <div className="contact-form">
                <div className="contact-form-container">
                    <h2 className="contact-form-title">Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="contact-form-inputs">
                            <input type="text" id="contact_form_name" className="input-field" placeholder="Your name" required />
                            <input type="email" id="contact_form_email" className="input-field" placeholder="Your email" required />
                            <input type="tel" id="contact_form_phone" className="input-field" placeholder="Your phone number" />
                        </div>
                        <div className="contact-form-textarea">
                            <textarea id="contact_form_message" className="text-field" name="message" rows="4" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="button contact-submit-button">Send Message</button>
                    </form>
                </div>
            </div>
            <ToastContainer position="bottom-left" />
        </div>
    );
};

export default Contact;
