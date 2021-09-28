import React from 'react'

export default function Project(props) {
    return (
        <div className="workbox">
        <a href={props.url} target="_blank"><div className="imgbx">
         <img src={props.image} alt="#"/></div>
        <div className="textbx">
            <h3>project 0{props.number}</h3></div></a>
    </div>
    )
}
