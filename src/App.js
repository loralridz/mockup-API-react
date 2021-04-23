import React, { useState } from "react";
import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";
import { Header } from "./components/Header/header.component";
import { Sidebar } from "./components/Sidebar/sidebar.component";
import { Home } from "./components/Home/home.component";
import { Collection } from "./components/Collection/collection.component";
import "./App.css";

function App() {
  const [cart, setCart] = useState(0);

  // handle cart functionality
  const handleClick = (e) => {
    e.preventDefault();
    setCart(cart + 1);
  };

  return (
    <div className="main">
      <Sidebar />
      <Header cartScore={cart} />
      <div className="routes">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/all-products"
              render={() => (
                <Collection type="BOTH" handleClick={handleClick} />
              )}
            />
            <Route
              exact
              path="/collection/apparel"
              render={() => (
                <Collection type="APPAREL" handleClick={handleClick} />
              )}
            />
            <Route
              exact
              path="/collection/shoes"
              render={() => (
                <Collection type="SHOES" handleClick={handleClick} />
              )}
            />
            {/* <Route exact path="/cart" component={Cart} /> */}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
