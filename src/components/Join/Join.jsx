import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Join.css";

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z22t65s', 'template_6g8oloh', form.current, 'T3I-tagU5tlkuSQvL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to </span>
          <span >Level up</span>
        </div>
        <div>
          <span >Your Body</span>
          <span className="stroke-text">With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter Your Email Address" />
            <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
