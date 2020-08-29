import React from "react";
import profileImage from "./img/kks.png";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author : KKS</h2>
      <img scr={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
