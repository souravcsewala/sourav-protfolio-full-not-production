import React from "react";
import "./About.css"
import aboutimg from "./aboutimg.jpeg"
import Zoom from 'react-reveal/Zoom';
import Jump from "react-reveal/Jump";

    const About=()=>{
          return(
            <>
               <Jump>
            <div className="about" id="about">
                 <div className="row">
                   <Zoom>
                    
                 <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img  src={aboutimg}
                
                alt="profile_pic"
              />
            </div>
            </Zoom>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                   Hello! My name is sourav sarkar.
                   Passionate computer science engineer with a knack for programming and problem-solving.
                   Dedicated to crafting high-quality software solutions that push boundaries and exceed expectations.
                    Proficient in multiple programming languages and technologies.
                     I am always interested lerning new technologies and its apply on my projects.
                       
               
              </p>
            </div>
                 </div>
            </div>
            </Jump>
            </>
          )
    }
       export default About;