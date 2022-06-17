import React from "react";
import "../sass/Contact.scss";
import linkendin from "../assets/logos/linkedin.png";
import github from "../assets/logos/github.png";
import facebook from "../assets/logos/facebook.png";
import email from "../assets/logos/email.png";

export const Contact = () => {
  return (
    <div className="contact" id="contact" >
      <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="2000">Contact</h1>
      <div className="logos" data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="2000">
        <div className="logo">
        <a href="https://www.linkedin.com/in/mutalifu-aimaierjiang-7784b3227/">
            <img src={linkendin} alt="html" />
          </a>
        </div>
        <div className="logo">
          <a href="https://github.com/Omarhuba">
            <img src={github} alt="html" />
          </a>
        </div>
        <div className="logo">
          <a href="mailto:omarhuba@gmail.com">
            <img src={email} alt="html" />
          </a>
        </div>
        <div className="logo">
          <a href="https://www.facebook.com/profile.php?id=100015673832105" >
            <img src={facebook} alt="html" width='50px'/>
          </a>
        </div>
      </div>
      <div className="form-block" data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="2000">
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Your Name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Your Email" />
          <label htmlFor="">Messages</label>
          <textarea
            placeholder="Type Your Messages Here...."
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
};
