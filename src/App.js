import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Card } from "semantic-ui-react";
import MiniCard from "./MiniCard/MiniCard";
import "./App.css";

import linearGradient from "./_generations/linear_gradient";
// import octagonalStar from "./_generations/octagonal_star";
import reactKawaii from "./_generations/react_kawaii";
import trianglify from "./_generations/trianglify";
import particles from "./_generations/particles";
import bubbles from "./_generations/bubbles";
// import tunnel from "./_generations/tunnel";
import waves from "./_generations/waves";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="restricted-width-area main-content-area">
          <Card.Group className="cards">
            <MiniCard showModal {...linearGradient} />
            <MiniCard {...trianglify} />
            <MiniCard {...particles} />
            <MiniCard {...bubbles} />
            <MiniCard {...waves} />
            <MiniCard {...reactKawaii} />
          </Card.Group>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
