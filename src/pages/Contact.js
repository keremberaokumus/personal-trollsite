import React from "react";
import BannerImage from "../assets/burger2.jpg";
import "../styles/Contact.css"
function Contact() {
  return (
    <div className="contact">
      <div className="rightSide">
        <h1>Contact Him if you are interested!</h1>

        <form id="contact-form" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
    
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter your name. He will remember it for all of his life" type="text" required/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your email. He will instantly mail you" type="email" required/>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows="6"
            placeholder="Enter your thoughts. Maybe you two can be penpals 🥰🥰"
            required
          ></textarea>
          <button type="submit">Submit for your new life!</button>
        </form>
      </div>
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      
    </div>
  );
}

export default Contact;
