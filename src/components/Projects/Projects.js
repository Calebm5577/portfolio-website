
import React from "react";
import ReactCardFlip from "react-card-flip";
import Data from "../../ProjectData.json";
import './Projects.scss'
import '../MediaQueries/Projects.scss'

const CardStyle = {
  padding: "30px",
  margin: "30px",
  width: "250px",
  height: "300px",
};

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  var required = true;
  var disabled = false;
  // console.log(project);
  return (
    <div className="Card-wrapper">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <div className="CardFront-div1">
          <p className="CardFront-div1-type">{project.type}</p>
          <h3 className="CardFront-div1-title">{project.title}</h3>
          <img width="250" src={project.gif} alt="" className="CardFront-div1-gif"/>
          <div className="CardFront-div1-list">
            <p>{project.html}</p>
            <p>{project.css}</p>
            <p>{project.javascript}</p>
            <p>{project.react}</p>
          </div>
        </div>
      </div>
      <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
          <div>
            <p>{project.description}</p>
            <span>
              Project:
              <a href={project.link} target="_blank" className="link"><p>{project.link}</p></a>
            </span>
            {!!project.code && (
              <span >
              Code:
              <a href={project.code} target="_blank"><p>{project.code}</p></a>
            </span>
            )}
          </div>
      </div>
    </ReactCardFlip>
    <button onClick={() => setIsFlipped((prev) => !prev)} className="cardflip-button">Flip</button>
    </div>
  );
};

const Projects = () => {
  return (
    <>
    <h1>Projects</h1>
    <div  className="Projects" id="Projects">
      {Data.map((item, index) => (
        <Card project={item} key={`card-${index}`} />
      ))}
    </div>
    </>
  );
};

export default Projects;



/*
  render() {
      return (
        <div className="Projects">
        {Data.map(project => {
          return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <div onMouseEnter={this.handleClick} className="CardFront">
            front
            <div >
                <h3>{project.title}</h3>
                <img src={project.gif} />
                <ul>
                  <li>{project.html}</li>
                  <li>{project.css}</li>
                  <li>{project.javascript}</li>
                  <li>{project.react}</li>
                </ul>
            </div>
          </div>
   
          <div onMouseLeave={this.handleClick} className="CardBack">
            This is the back of the card.
          </div>
        </ReactCardFlip>
          )
        })}
        </div>
      )
      }
      */