import React from "react"
import "./Features.css"

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow '>
                <div className="d_flex picture">
                    <img src={props.image} alt='' />
                </div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>

            </div>
        </>
    )
}

export default Card
