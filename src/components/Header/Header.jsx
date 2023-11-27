import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitlesm">React & Node</span>
          <span className="headerTitlelg">Blog</span>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUdk4GaAI2XCeu8ML4TI2exD62_dRlOz-jpkD9iJuoUn3lAxCu8lb6KU9490OfofICRg&usqp=CAU"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
