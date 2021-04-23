import React from "react";
import { useHistory } from "react-router-dom";
import "./home.styles.css";

export const Home = () => {
  const history = useHistory();
  const componentRoute = async (route) => {
    switch (route) {
      case "APPAREL":
        history.push("/collection/apparel");
        break;
      case "SHOES":
        history.push("/collection/shoes");
        break;
      default:
        break;
    }
  };
  const renderRoute = (t) => {
    componentRoute(t);
  };
  return (
    <div className="new">
      <div className="card" onClick={() => renderRoute("APPAREL")}>
        <img
          src="https://images.unsplash.com/photo-1514313996915-89d3aff2b79e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29hdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Avatar"
        />
        <div className="container">
          <h4 onClick={() => renderRoute("APPAREL")}>APPAREL</h4>
        </div>
      </div>
      <div className="card" onClick={() => renderRoute("SHOES")}>
        <img
          src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Shoes"
        />
        <div className="container">
          <h4 >SHOES</h4>
        </div>
      </div>
    </div>
  );
};
