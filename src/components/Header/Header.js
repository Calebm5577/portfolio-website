import React from 'react'
import './Header.scss'
import { About } from '../About/About';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


 
const Header = () => ({
  componentDidMount: function() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });
 
    scrollSpy.update();
  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  // scrollToTop: function() {
  //   scroll.scrollToTop();
  // },
  scrollToBottom: function() {
    scroll.scrollToBottom();
  },
  // scrollTo: function() {
  //   scroll.scrollTo(100);
  // },
  // scrollMore: function() {
  //   scroll.scrollMore(100);
  // },
  handleSetActive: function(to) {
    console.log(to);
  },

  render: function() {
    return (
        <div className="Header">
            <div className="Header-div1">
                <h3 className="Header-div1__name">Caleb Middleton</h3>
            </div>
            <div className="Header-div2">    
               <Link to="skills" spy={true} smooth={true} offset={-50} duration={1000}><p className="Header-div2__Skills margin-right">Skills</p></Link>
               <Link to="Projects" spy={true} smooth={true} offset={-100} duration={1200}> <p className="Header-div2__Projects margin-right" >Projects</p></Link>
               <Link to="Footer" spy={true} smooth={true} offset={-100} duration={1400}><p className="Header-div2__About margin-right" >About</p></Link>
            </div>
        </div>
    )
}
})

export default Header
