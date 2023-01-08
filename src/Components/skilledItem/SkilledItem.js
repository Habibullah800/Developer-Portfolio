import React from 'react';
import "./SkilledItem.css"
import data from "./SkilledItemAPI"
import Card from "./Card"

const SkilledItem = () => {
    return (
        <div>
            <>
                <section className='skilledItem top' id='skill'>
                    <div className='container'>
                        <div className='heading'>
                            <h4 className="title">Skilled Area</h4>
                            <h1 className="ShortTitle">The skills I have</h1>
                        </div>
                        <div className='content skillGrid'>
                            {data.map((val, index) => {
                                return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                            })}
                        </div>
                    </div>
                </section>
            </>
        </div>
    );
};

export default SkilledItem;