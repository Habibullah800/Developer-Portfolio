import React, { useState, useRef } from "react"
import "./Feedback.css"
import emailjs from '@emailjs/browser';

const Feedback = () => {
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
                        <h1>Leave a reply</h1>
                    </div>

                    <div>



                        <div className='right box_shodow'>
                            <form ref={form} onSubmit={sendEmail}>

                                <div className='input RightText'>
                                    <span className="text">YOUR NAME </span>
                                    <input type='text' name="user_name" />
                                </div>
                                <div className='input RightText'>
                                    <span>EMAIL </span>
                                    <input type='email' name="user_email" />
                                </div>
                                <div className='input RightText'>
                                    <span>SUBJECT </span>
                                    <input type='text' name='subject' />
                                </div>
                                <div className='input RightText'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='3' name="message" ></textarea>
                                </div>
                                <button className='btn_shadow '>
                                    SUBMIT NOW <i className='fa fa-long-arrow-right'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feedback
