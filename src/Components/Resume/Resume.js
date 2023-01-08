import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
    return (
        <>
            <section className='Resume' id='resume'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>2+ YEARS OF EXPERIENCE</h4>
                        <h1>My Resume</h1>
                    </div>
                    <div className='content-section mtop d_flex'>
                        <div className='left'>
                            <div className='heading'>
                                {/* <h4>2007-2010</h4> */}
                                <h1>Education Quality</h1>
                            </div>
                            <div className='content'>
                                {ResumeApi.map((val, id) => {
                                    if (val.category === "education") {
                                        return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                                    }
                                })}
                            </div>
                        </div>
                        <div className='left'>
                            <div className='heading'>
                                {/* <h4>2007-2010</h4> */}
                                <h1>Job Experience</h1>
                            </div>
                            <div className='content'>
                                {ResumeApi.map((val, index) => {
                                    if (val.category === "experience") {
                                        return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='button resumeBtn '>
                        <a href='https://drive.google.com/file/d/1MdjQN843Ui4nVrn27KOL_dN09wVVJ3Xd/view?usp=sharing' target='blank'>
                            <button className='btn_shadow'>
                                Download my Resume
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume
