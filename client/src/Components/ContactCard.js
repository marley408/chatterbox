import React, { Component } from "react";
import io from "socket.io-client";
import '../dashboard.css';


const ContactCard = props => {
  return (
    <div>
      <li>
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img
              src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
              className="rounded-circle user_img"
            />
            <span className="online_icon" />
          </div>
          <div className="user_info">
            <span>Maryam Naz</span>
            <p>Maryam is online</p>
          </div>
        </div>
      </li>
    </div>
  );

}

export default ContactCard
  

