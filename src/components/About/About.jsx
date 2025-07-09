import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <p>Flutter</p>
                        <hr style={{ width: "50%" }} />
                          <p>Android</p>
                        <hr style={{ width: "50%" }} />
                          <p>Ios</p>
                        <hr style={{ width: "50%" }} />
                          <p>React js</p>
                        <hr style={{ width: "50%" }} />
                          <p>React Native</p>
                        <hr style={{ width: "50%" }} />
                          <p>UI/UX</p>
                        <hr style={{ width: "50%" }} /> 
                         <p>Java Script</p>
                        <hr style={{ width: "50%" }} />      
                        {/* <p></p>

                        <p></p>

                        <p></p>

                        <p></p>

                        <p></p> */}


                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achibement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                    <div className="about-achibement">
                    <h1>11+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                  <hr/>
                    <div className="about-achibement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS m, m m xm </p>
                </div>

            </div>
        </div>
    )
}

export default About