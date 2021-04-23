import React from "react";
import "./sidebar.styles.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className="active" href="/">
        Mockup API
      </a>
      <a href="/all-products" >
        All Products
      </a>
      <a href="/">
        Collections
      </a>

      <a href="/">My Cart</a>
    </div>
  );
};
