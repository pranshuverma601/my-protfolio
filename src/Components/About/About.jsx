import React from 'react';
import './About.css';
import profile from '../../assets/pra.jpeg';
import themePattern from '../../assets/theme_pattern.svg';


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="" style={{height:"600px", width:"420px"}}/>
            </div>
            <div className="about-rigth">
                <div className="about-para">
                    <p>I have good knowledge Frontend Development with over the project</p>
                    <p>My passion for frontend and backend development</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"55%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div> 
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>MONTH OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About;