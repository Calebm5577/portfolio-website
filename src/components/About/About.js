import React from 'react'
import './About.scss'
import '../MediaQueries/About.scss'
import Myself from '../../images/myself.jpg'

export const About = () => {
    return (
        <div className="About">
            <h1 className="About-title">About Me</h1>
            <div className="About-div1">
                <img src={Myself} alt="myself" className="About-div1-img"/>
                <h3 className="About-div1-name">Caleb Middleton</h3>
            </div>
            <div className="About-div2">
                <p className="About-div2-p">&ensp; Front-end developer based out of North Carolina. Experience working in teams for both react/gatsby and wordpress websites, in design and development. 
                    Passionate about all things coding. </p>
            </div>
            
        </div>
    )
}
