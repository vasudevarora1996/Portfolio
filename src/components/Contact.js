import React from 'react';
import '../styles/Contact.css';
import contactImg from "../img/about-9.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for Freelance Work. Connect with me via Phone:</p>
                            <p className="hire__text white"><strong>+91 8077610865</strong> or Email <strong>vasudev.arora6120@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                            <input type="text" className="contact name" placeholder="Full Name *" />
                            <input type="text" className="contact email" placeholder="Email Address *" />
                            <input type="text" className="contact subject" placeholder="Subject" />
                            <textarea name="message" id="message" placeholder="Write Your Message *"></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
