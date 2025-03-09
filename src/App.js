import React from "react";
import logo from "./logo.png";
import "./App.css";
import Lexicon from "./Lexicon";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="logo-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </div>
        <header className="App-header"></header>
        <h1>Welcome to Lexicon App</h1>
        <main>
          <Lexicon />
        </main>
        <footer className="App-footer">
          <small>
            coded by <a href="https://www.instagram.com/yourgurljd/">Jd </a>{" "}
            with open-source at{" "}
            <a href="https://github.com/JDASL/lexicon_app.git">Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
