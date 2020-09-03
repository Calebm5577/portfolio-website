import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.scss';
import '../MediaQueries/Footer.scss'
import { About } from '../About/About';

export const Footer = () => {

    
const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };

    return (
        <div className="Footer">
            <div>
                <About />
            </div>
             <div className="Footer-icons">
                 <span className="Footer-icons-span">
                   <a href="https://twitter.com/WebDevCaleb" target="_blank"><TwitterIcon className="Footer-icons-icon" fontSize="large"/></a> 
                   <a href="https://twitter.com/WebDevCaleb" target="_blank"  className="Footer-icons-icon-a"><h2 className="Footer-icons-span-h2">Follow me on twitter</h2></a>
                 </span>
                 <span className="Footer-icons-span">
                    <a href="https://github.com/Calebm5577" target="_blank"><GitHubIcon className="Footer-icons-icon" fontSize="large"/></a>
                    <a href="https://github.com/Calebm5577" target="_blank" className="Footer-icons-icon-a"><h2 className="Footer-icons-span-h2">Check out my code on Github</h2></a>
                 </span>
                 <span className="Footer-icons-span">
                    <a href="https://www.linkedin.com/in/caleb-middleton-5206b01a6/" target="_blank"><LinkedInIcon className="Footer-icons-icon" fontSize="large"/></a>
                    <a href="https://www.linkedin.com/in/caleb-middleton-5206b01a6/" target="_blank"  className="Footer-icons-icon-a" className="Footer-icons-icon-a"><h2 className="Footer-icons-span-h2">Connect with me on Linkedin</h2></a>
                 </span>
        </div>
        </div>
       
    )
}
