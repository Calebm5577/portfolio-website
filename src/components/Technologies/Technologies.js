import React from 'react'
import './Technologies.scss'
import Data from '../../TechnologiesData.json'

export const Technologies = () => {
    return (
        <div className="Technologies-wrapper">
            <h1>Skills</h1>
            <div className="Technologies">
                {Data.map(technology => {
                    return (
                        <div className="Technologies-div1">
                            <img src={technology.logo} className="Technologies-div1-img" placholder="img"/>
                            <h3 className="Technologies-div1-name">{technology.name}</h3>
                        </div >
                    )
                })}
            </div>
        </div>
    )
}
