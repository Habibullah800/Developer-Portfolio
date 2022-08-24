import React, { useState, useRef } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        const name = e.target.user_name.value;
        const phone = e.target.phone.value;
        const email = e.target.user_email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;


        emailjs.sendForm('service_006ehbq', 'template_1wm0mza', form.current, 'P2ov0TGDQT6meLdtg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert(
            `My name is ${name}. 
        My phone number is ${phone}. 
        My email address is ${email}. 
        My Subject on  ${subject}. 
        Here is my message I want to say : ${message}. 
        `
        )

        e.preventDefault()
        e.target.reset();
    };




    return (
        <>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>

                    <div className='content d_flex'>
                        <div className='left'>
                            <div className='box box_shodow'>
                                <div className='img'>
                                    <img src={contact1} alt='' />
                                </div>
                                <div className='details'>
                                    <h1>Nevine Acotanza</h1>
                                    <p>Chief Operating Officer</p>
                                    <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                                    <p>Phone: +01234567890</p>
                                    <p>Email: admin@example.com</p> <br />
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-facebook-f'></i>
                                        </button>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-instagram'></i>
                                        </button>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-twitter'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='right box_shodow'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name="user_name" />
                                    </div>
                                    <div className='input row'>
                                        <span>PHONE NUMBER </span>
                                        <input type='number' name='phone' />
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>EMAIL </span>
                                    <input type='email' name="user_email" />
                                </div>
                                <div className='input'>
                                    <span>SUBJECT </span>
                                    <input type='text' name='subject' />
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='6' name="message" ></textarea>
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
