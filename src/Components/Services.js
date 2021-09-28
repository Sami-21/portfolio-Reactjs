import React from 'react'
import webDesign from './ressources/icon1.png'
import webDev from './ressources/icon2.png'
import Service from './Service'

export default function Services() {
    return (
        <section className="services"  id="services">
        <div className="heading white">
        <h2>My Services</h2>
        <p>check out the list below to understand my skillset. </p>
        </div>
        <div className="content">
           <Service image={webDesign} title ="Web Design" description="The website you are surfing right now is made by me ,which clearly demonstrate my ability to innovate great designs"/>
           <Service image={webDev} title ="Front-end Development" description="i have been building simple websites and  cool looking CSS effects since 2019."/>
        </div>
    </section>
    )
}
