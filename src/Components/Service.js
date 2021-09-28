import React from 'react'

export default function Service(props) {
    return (
        <div className="servicesbox">
        <img src={props.image} alt="#"/>
        <h2>{props.title}</h2><br/>
        <p>{props.description} </p></div>
    )
}
