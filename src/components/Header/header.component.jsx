import React from "react";
import "./header.styles.css";

export const Header = ({cartScore}) => {
  return (
    <div className="topnav" id="myTopnav">
      <a href="/" className="notification">
        <span>
          <i className="fa fa-shopping-cart"></i>
        </span>
        <span className="badge">{cartScore}</span>
      </a>
    </div>
  );
};
