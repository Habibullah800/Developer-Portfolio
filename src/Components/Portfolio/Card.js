import React, { useState } from "react"

const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    console.log(props.gitui);
    const git = props.gitui
    return (
        <>
            <div onClick={toggleModal} className='box btn_shadow '>
                <div className='img'>
                    <img src={props.image} alt='' onClick={toggleModal} />
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.category}</span>
                    <label>
                        <i className='far fa-heart'></i> {props.totalLike}
                    </label>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <a href='#popup' onClick={toggleModal}>

                        <button className='btn_shadow'>
                            Details
                        </button>
                    </a>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                            <span className='category d_flex'>{props.tecnology}</span>
                        </div>
                        <div className='modal-text right'>
                            <span>Featured - Design</span>
                            <h1>{props.title}</h1>
                            <p>{props.discription}</p>

                            <div className='button modalButon m_top'>
                                <a href={props.live} target='blank'>
                                    <button className='btn_shadow'>
                                        WebSite Live Link
                                    </button>
                                </a>

                                <a href={props.gitui} target='blank'>
                                    <button className='btn_shadow'>
                                        Git UI Repository
                                    </button>
                                </a>
                                <a href={props.gitserver} target='blank'>
                                    <button className='btn_shadow'>
                                        Server Repository
                                    </button>
                                </a>


                            </div>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i class='fas fa-times'></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card
