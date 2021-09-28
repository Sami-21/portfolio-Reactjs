import React from 'react'
export default function SkillBar(props) {
    return (
        <div className="card">
        <div className="box">
            <div>
                <div className="percent">
                <svg>
                    <circle cx='70' cy='70' r="70"></circle>
                    <circle cx='70' cy='70' r="70" style={{
  strokeDashoffset: `calc(440px - (440px * ${props.percent} ) / 100)`

                    }}></circle>
                </svg>
                <div className="skill_icon"> 
                {props.icon}
         
                    </div>
                   
                </div>
                  <div className="number"> 
                    <h2>{props.percent}<span>%</span></h2>
                    </div>
            </div>
        </div>
        <div className="text0" style ={{backgroundColor :`${props.color}` }}>{props.skill}</div>
    </div> 
    )
}
