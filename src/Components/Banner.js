import React from 'react'

export default function Banner() {
    return (
        <section className="banner" id="home">
        <div className="textBox">
        <h2>Hello, I am <br/> <span>Sami Maachi.</span></h2>
        <h3>I am a Junior React developer.</h3>
        <a href="#about" className="btn">About Me</a>
    </div>
    
    <div className="social-media">
        <ul>
            <li><a href="https://www.facebook.com/MaachiBlack" target="_blank" id="fb"><i className="fa fa-facebook" aria-hidden="true"></i>
            </a></li>
            <li><a href="https://www.instagram.com/samovitch99/?hl=fr" target="_blank" id="insta"><i className="fa fa-instagram" aria-hidden="true"></i>
            </a></li>
            <li><a href="https://www.linkedin.com/in/sami-maachi-161925198/" target="_blank" id="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i>
            </a></li>
            <li><a href="https://github.com/Sami-21" target="_blank" id="git"><i className="fa fa-github" aria-hidden="true"></i>
            </a></li>
        </ul>
        </div>
    </section>
    )
}
