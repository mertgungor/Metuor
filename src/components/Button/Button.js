import React from "react";
import "./button.css";

function Button() {
  return (
    <div className="buttons-container">
      <button className="button">Eject Satalite</button>
      <button className="button">Connect</button>
      <button className="button">COM</button>
      <button className="button">Baud</button>
      <button className="button">Select Video</button>
      <button className="button">Start Video Transmission</button>
      <button className="button">Stop Transmission</button>
      <button className="button">Reset Video</button>
      <button className="button">Reset Satalite</button>
      <button className="button">Motor Test</button>
    </div>
  );
}

export default Button;
