import React from "react";
import "./Project.css"
import Fade from "react-reveal/Fade";
import shopimage from "./shopingsite.jpg";
import univerimg from "./university.png";
import jobimg from "./job.avif"

const Project=()=>{
      return(
        <>
            <div className="container project">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                      TOP RECENT PROJECTS
                   </h2>
                                <hr />
                                <Fade left>
                                <div className="row" id="ads">
        
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src={shopimage}                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                    Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="#"
                  >
                    upload very soon
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mobile App</span>
                  <img
                    src={univerimg}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>

                  <span className="card-detail-badge"> ANDROID</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> UNIVERSITY SYSTEM</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="#"
                  >
                    upload very soon
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={jobimg}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> Job Portal</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    upload very soon
                  </a>
                </div>
              </div>
            </div>
          
        </div>
        </Fade>
            </div>
           

        </>
      )
}
   export default Project;