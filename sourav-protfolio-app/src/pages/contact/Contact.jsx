import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import contactimg from './contact-image.jpg'

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  // ami akhana fetch a use korta pari 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!username || !email || !msg) {
        toast.error("Please Provide all fields");
      } else {
        const res = await axios.post("https://sourav-protfolio.onrender.com/protfolio/api/get-contact", {
          username,
          email,
          msg,
        });
        console.log ("value of res",res);
        if (res.status===200)
          
           {
          toast.success(res.data.message);
          setUsername("");
          setEmail("");
          setMsg("");
        } else {
          toast.error(res.data.message);
          console.log(res.data.message);
        }
      }
    } catch (error) {
      console.log(  "error from contact page ",error);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src={contactimg}
                      alt="contact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                    <a href="www.linkedin.com/in/sourav-sarkar-2b0b17240 " target="blank"> <BsLinkedin color="blue" size={30} className="ms-2"  /></a>
                    < a href="https://github.com/souravcsewala" target="blank">  <BsGithub color="black" size={30} className="ms-2"  /></a>
                    < a  href="https://www.facebook.com/sourav.r.50115?mibextid=ZbWKwL" target="blank">  <BsFacebook color="blue" size={30} className="ms-2" /> </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
