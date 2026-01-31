import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3 className="center">WELCOME TO MY WORLD</h3>
                        <h1 className="center-1">
                            Hi, I’m <span>Habibullah</span>
                        </h1>
                        <h2 className="none">
                            a
                            <span>
                                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='.' typeSpeed={90} deleteSpeed={70} delaySpeed={1000} />
                            </span>
                        </h2>
                        <p>I’m a passionate full-stack web developer with 5+ years of experience, focusing on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you! </p>
                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    <a href="https://github.com/Habibullah800" target='blank'>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-github'></i>
                                        </button>
                                    </a>
                                    <a href="./"
                                     target="blank">
                                    {/* "https://web.facebook.com/profile.php?id=100008422393695" */}
                                        <button className='btn_shadow'>
                                            <i className='fab fa-facebook-f'></i>
                                        </button>
                                    </a>
                                    <a href=" https://www.linkedin.com/in/habibullah-habib800/" target="blank">
                                        <button className='btn_shadow'>
                                            <i class="fab fa-linkedin"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4><div className='button'>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-react'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-angular'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class="fab fa-node"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
