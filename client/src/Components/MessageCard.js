import React, { Component } from "react";
import io from "socket.io-client";
import "../dashboard.css";

export default class MessageCard extends Component {
  render() {
    return (
      <div className="message-card-container">
        {/* <div className="col-md-8 col-xl-6 chat"> */}
          <div className="card">
            <div className="card-header msg_head">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img
                    src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    className="rounded-circle user_img"
                  />
                  <span className="online_icon" />
                </div>
                <div className="user_info">
                  <span>Chat with Maryam Naz</span>
                  <p>1767 Messages</p>
                </div>
                {/* <div className="video_cam">
                  <span>
                    <i className="fas fa-video" />
                  </span>
                  <span>
                    <i className="fas fa-phone" />
                  </span>
                </div> */}
              </div>
              <span id="action_menu_btn">
                <i className="fas fa-ellipsis-v" />
              </span>
              <div className="action_menu">
                <ul>
                  <li>
                    <i className="fas fa-user-circle" /> View profile
                  </li>
                  <li>
                    <i className="fas fa-users" /> Add to close friends
                  </li>
                  <li>
                    <i className="fas fa-plus" /> Add to group
                  </li>
                  <li>
                    <i className="fas fa-ban" /> Block
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body msg_card_body">
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    className="rounded-circle user_img_msg"
                  />
                </div>
                <div className="msg_cotainer">
                  Hi, how are you samim?
                  <span className="msg_time">8:40 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  Hi Maryam i am good tnx how about you?
                  <span className="msg_time_send">8:55 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src="" className="rounded-circle user_img_msg" />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    className="rounded-circle user_img_msg"
                  />
                </div>
                <div className="msg_cotainer">
                  I am good too, thank you for your chat template
                  <span className="msg_time">9:00 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  You welcome Maryam
                  <span className="msg_time_send">9:05 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src="" className="rounded-circle user_img_msg" />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    className="rounded-circle user_img_msg"
                  />
                </div>
                <div className="msg_cotainer">
                  I am looking for your next templates
                  <span className="msg_time">9:07 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  Ok, thank you have a good day
                  <span className="msg_time_send">9:10 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src="" className="rounded-circle user_img_msg" />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    className="rounded-circle user_img_msg"
                  />
                </div>
                <div className="msg_cotainer">
                  Bye, see you
                  <span className="msg_time">9:12 AM, Today</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="input-group">
                <div className="input-group-append">
                  <span className="input-group-text attach_btn">
                    <i className="fas fa-paperclip" />
                  </span>
                </div>
                <textarea
                  name=""
                  className="form-control type_msg"
                  placeholder="Type your message..."
                />
                <div className="input-group-append">
                  <span className="input-group-text send_btn">
                    <i className="fas fa-location-arrow" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    );
  }
}
