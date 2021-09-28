import React from 'react'
import aboutImage from './ressources/img1.jpg'
export default function About() {
    return (
         
        <section className="about" id="about">
            <div className="heading">
                <h2>About Me</h2>
            </div>
            <div className="content">
                <div className="contentbox w50">
                    <h3>I am a Junior web developer.</h3>
                    <p>I am a  computer science student and a Junior web developer. I can build simple and responsive web pages like this portfolio using HTML , CSS and javascript.
                        In life there is always opportunities to learn ,grow and gain wisdom. Leave me a feedback about your thought and critics about my website in the contact section <a href="#contact" >below.</a> <br/>
                    </p>
                     <br />
                <div className="w50">
                    <img src={aboutImage} alt="#" />
                </div>
            </div>
            </div>
        </section>
    )
}
