import React from "react"
import "./Features.css"
import data from "./FeaturesApi"
import Card from "./Card"

const Features = () => {
    return (
        <>
            <section className='features top' id='features'>
                <div className='container'>
                    <div className='heading'>
                        <h4 className="title">Features</h4>
                        <h1 className="ShortTitle">What I Do</h1>
                    </div>
                    <div className='content grid'>
                        {data.map((val, index) => {
                            return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
