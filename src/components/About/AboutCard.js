import React from "react";
import Card from "react-bootstrap/Card";
import { BiRightArrow } from "react-icons/bi";

function AboutCard() {
  return (
    <div className="aboutc" >
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify", color: "white" }}>
              Hi Everyone, My name is <span className="purple">Onwanya Sakharet</span>
              <br/>
              You can call me 
              <span className="purple" style={{padding: 10}}>Jane</span>
              , I'm <span className="purple">24 years old</span>.
              <br />I graduated from Burapha University, with  
              <span className="purple"> Information Technology.</span>
              <br />Currently I'm working on Junior Software Engineer, With
              <span className="purple"> 1 years 7 months experience</span>
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>

            <ul>
              <li className="about-activity" style={{ color: "MediumPurple" }}>
                <BiRightArrow /> Playing Games
              </li>
              <li className="about-activity" style={{ color: "MediumPurple" }}>
                <BiRightArrow /> Travelling
              </li>
            </ul>

          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
