import React from "react";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <>
      <div className="top">
        <div className="topIcon topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            alt=""
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default Topbar;
