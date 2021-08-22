import React from "react";
import "./Header.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import TouchAppRoundedIcon from "@material-ui/icons/TouchAppRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
function Header() {
  return (
    <div className="header">
      <div className="hospital__name">
        <div className="hospital__icon">
          <LocalHospitalIcon />
        </div>
        <h1>Doctor-e-clinics</h1>
      </div>
      <div className="hospital__icons">
        <div className="Hospital__icon1">
          <div className="hospital__icon2">
            <SearchRoundedIcon />
          </div>
          <h3>Find a Doctor</h3>
        </div>
        <div className="Hospital__icon1">
          <div className="hospital__icon2">
            <TouchAppRoundedIcon />
          </div>
          <h3>Appointment</h3>
        </div>
        <div className="Hospital__icon1">
          <div className="hospital__icon3">
            <ChatBubbleOutlineRoundedIcon />
          </div>
          <h3>Chat with Doctor</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
