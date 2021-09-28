import React from 'react'
import RockPaperScissors from './ressources/rock_paper_scissors.png'
import SocialDashBoard from './ressources/social_dashboard.png'
import Calendar from './ressources/calendar.png'
import MusicPlayer from './ressources/music_player.png'
import Donationwebsite from './ressources/Screenshot (14).png'
import ColumnsPreview from './ressources/Screenshot (17).png'
import TipCalculator from './ressources/Screenshot (12).png'
import Project from './Project'

export default function Work() {
    return (
        <section className="work" id="work">
        <div className="heading ">
            <h2>My Latest Work</h2>
            <p>All these projects are personal projects. </p>
            </div>
            <div className="content">
                <Project url="https://ecstatic-saha-2bb1bd.netlify.app/" image={Donationwebsite} number='1'/>
                 <Project url="https://resposive-social-media-dashboard.vercel.app/" image={SocialDashBoard} number="2" />
                <Project url="https://dynamic-calendar.vercel.app/" image={Calendar} number='3'/>
                <Project url="https://simple-music-player-psi.vercel.app//" image={MusicPlayer} number='4'/>
                <Project url="https://rock-paper-scissors-sand.vercel.app/" image={RockPaperScissors} number='5'/>
                 <Project url="https://boring-minsky-9af79c.netlify.app/" image={ColumnsPreview} number="6" />
                <Project url="https://tip-calculator-eta-wheat.vercel.app/" image={TipCalculator} number='7'/>
                 
                
            </div>
            <div className="heading ">
                <button onClick={() => {
                if(document.querySelector('.work .content').classList.contains('extended')) {document.querySelector(".work .heading .btn").textContent="Show More"}
                    else {document.querySelector(".work .heading .btn").textContent = "Show Less"}
                document.querySelector('.work .content').classList.toggle('extended');
            }}className="btn">Show More</button>
                </div>
    </section>
    )
}
