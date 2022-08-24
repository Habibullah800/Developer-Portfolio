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
                                <div className='pic'>
                                    <img src={contact1} alt='' />
                                </div>
                                <div className='details'>
                                    <h1>Habibullah Bahar</h1>
                                    <p>Web Developer</p>
                                    <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                                    <p>Phone: +8801757971756</p>
                                    <p>Email: mdhabibullah800@gmail.com</p> <br />
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <a href="https://web.facebook.com/profile.php?id=100008422393695" target="blank">
                                            <button className='btn_shadow'>
                                                <i className='fab fa-facebook-f'></i>

                                            </button>
                                        </a>

                                        <a href=" https://www.linkedin.com/in/habibullah-habib800/" target="blank">
                                            <button className='btn_shadow'>
                                                <i class="fab fa-linkedin"></i>
                                            </button>
                                        </a>

                                        <a href="https://www.instagram.com/t_r_md_habibullah/" target='blank'>
                                            <button className='btn_shadow'>
                                                <i className='fab fa-instagram'></i>
                                            </button>
                                        </a>

                                        <a href="https://twitter.com/Habibul42677783" target='blank'>
                                            <button className='btn_shadow'>
                                                <i className='fab fa-twitter'></i>
                                            </button>
                                        </a>
                                        <a href="https://github.com/Habibullah800" target='blank'>
                                            <button className='btn_shadow'>
                                                <i className='fab fa-github'></i>
                                            </button>
                                        </a>
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
