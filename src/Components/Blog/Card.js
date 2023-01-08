import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import './Blog.css'

const Card = (props) => {
    const form = useRef();
    const sendEmail = (e) => {
        const name = e.target.user_name.value;
        const phone = e.target.phone.value;
        const email = e.target.user_email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        emailjs.sendForm('service_006ehbq', 'template_1wm0mza', form.current, 'P2ov0TGDQT6meLdtg')
            .then((result) => {
            }, (error) => {
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

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    return (
        <>
            <div onClick={toggleModal} className='box btn_shadow '>

                <div className='img'>

                    <img src={props.image} alt='' />
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.date}</span>
                    {/*<label>
            <i className='far fa-heart'></i> {props.date}
          </label>*/}
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title_one}</h2>
                    <a href='#popup' className='arrow' onClick={toggleModal}>
                        <i class='fas fa-arrow-right'></i>
                    </a>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal modal-blog'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <span>{props.date}</span>
                            <h1>{props.title_one}</h1>
                            <p>{props.desc_one}</p>

                            <h1>{props.title_two}</h1>
                            <p>{props.desc_two}</p>

                            <h1>{props.title_three}</h1>
                            <p>{props.desc_three}</p>

                            <h1>{props.title_four}</h1>
                            <p>{props.desc_four}</p>

                            <h1>{props.title_five}</h1>
                            <p>{props.desc_five}</p>

                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i class='fas fa-times'></i>
                            </button>

                            {/*---------Leave Message----------  */}

                            <div className='heading text-center'>
                                <h4>Leave a Message for me.</h4>
                            </div>

                            <div className='right box_shodow'>
                                <form ref={form} onSubmit={sendEmail}>

                                    <div className='input'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name="user_name" />
                                    </div>
                                    <div className='input'>
                                        <span>PHONE NUMBER </span>
                                        <input type='number' name='phone' />
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
                                        <textarea cols='30' rows='8' name="message" ></textarea>
                                    </div>
                                    <button className='btn_shadow sendBtn'>
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>

                            {/*---------Leave Message----------  */}
                        </div>
                    </div>
                </div>
            )
            }

        </>
    )
}

export default Card
