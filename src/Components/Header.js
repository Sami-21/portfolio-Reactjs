import React from 'react'

export default function Header() {
    function toggleMenu(){
        document.querySelector('.toggle').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('active');
    }
    window.addEventListener('scroll',function(){
        document.querySelector('header').classList.toggle('sticky',window.scrollY > 0);
    });
    return (
        <header>
        <a href="#home" className="logo">Sami Maachi </a>
        <div className="toggle" onClick= {toggleMenu} ></div>
            <ul className="menu">
                <li><a href="#home"  onClick= {toggleMenu} >Home</a></li>
                <li><a href="#about"  onClick= {toggleMenu} >About</a></li>
                <li><a href="#skills"  onClick= {toggleMenu} >skills</a></li>
                <li><a href="#services" onClick= {toggleMenu} >Services</a></li>
                <li><a href="#work"  onClick= {toggleMenu} >Work</a></li>
                <li><a href="#testimonial"  onClick= {toggleMenu} >Testimonial</a></li>
                <li><a href="#contact"  onClick= {toggleMenu} >Contact</a></li>
            </ul>
    </header>
    )
}
