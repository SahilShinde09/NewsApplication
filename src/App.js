import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

export default class App extends Component {
  c = "John";
  render() {
    return (
      <div>
        <Navbar />
        <div className="container my-3">
          <div className="row">
            <News/>
          </div>
        </div>
      </div>
    );
  }
}
