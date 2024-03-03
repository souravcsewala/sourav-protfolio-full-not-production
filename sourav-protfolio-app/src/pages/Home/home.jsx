import React from "react";
import './home.css'
import Typewriter from 'typewriter-effect';
import { useTheme } from "../../context/Themecontext";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
 import Resume from "../../assets/cv/SOURAV CV.pdf"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



  const Home=()=>{
    const [theme, setTheme] = useTheme();
    const {globalVisits}=useTheme()
    const handleTheme = () => {
      setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };
    const handleDownloadResume = () => {
      // Display a toast notification
      toast.success("Thank you for downloading my resume!");
    };
      return(
        <>
             <div className="container-fluid home-container" id="home">
             <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
                    <div className="container home-content">
                      <Fade right>
                      <h3 >"Education is not the learning of facts,
                         but it is a training of mind to think"-<span className="albert"> Sir Albert Einstein</span> </h3>
                      <h2>Hii, i'm </h2>
                      
                      <h1><Typewriter
                options={{
                  strings: [
                    "sourav sarkar",
                    "software Engineer!",
                    "FullStack Developer!",
                    "cloud Engineer!",
                    "Network Engineer!",
                    "Data analytics!",
                    "Physics Lover"
                    ,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              /></h1>
              </Fade>
               <Fade bottom>
               <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9163528236"
                rel="noreferrer"
                target="_blank"
              >
                Contact with me
              </a>
              <a className="btn btn-cv" href={Resume}  download="SOURAV CV.pdf"  onClick={handleDownloadResume}>
                My Resume
              </a>
            </div>
            </Fade>

                    </div>
             </div>
        </>
      )
  }

    export default Home;