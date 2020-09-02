import React from 'react'
import './Skills.scss'
import Data from '../../SkillsData.json'

export const Skills = () => {
    return (
        <>
        <h1>Services</h1>
        <div className="Skills-wrapper">
        {Data.map(skills => {
            return(
            <div className="Skills" key={skills.id}>
                <img src={skills.img}className="Skills__img"/>
                <h3 className="Skills__title"> {skills.title} </h3>
                <p className="Skills__info"> {skills.info} </p>
            </div>
            )
        })}
        </div>
        </>
    )
}
