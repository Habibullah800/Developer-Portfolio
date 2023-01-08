import React from 'react';
import "./SkilledItem.css"

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow '>
                <div className="d_flex  ">
                    <img className='picture' src={props.image} alt='' />
                </div>
                <h2 className='Skilltitle'>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </>
    );
};

export default Card;