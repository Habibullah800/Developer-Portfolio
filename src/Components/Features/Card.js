import React from "react"
import "./Features.css"

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow '>
                <div className="d_flex">
                    <img src={props.image} alt='' />
                    <a href='/'>
                        <i className='fas fa-arrow-right arrow'></i>
                    </a>
                </div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>

            </div>
        </>
    )
}

export default Card
