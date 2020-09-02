import React from 'react'
import './Header.scss'
import { About } from '../About/About';

export const Header = () => {
    return (
        <div className="Header">
            <div className="Header-div1">
                <h3 className="Header-div1__name">Caleb Middleton</h3>
            </div>
            <div className="Header-div2">
                <p className="Header-div2__About margin-right">About</p>
                <p className="Header-div2__Skills margin-right">Skills</p>
                <p className="Header-div2__Projects margin-right">Projects</p>
            </div>
        </div>
    )
}


