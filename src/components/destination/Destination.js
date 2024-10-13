import React from "react";
import "./Destination.css";

export const Destination = () => {
  return (
    <div id="container">
      <div id="left-side">
        <div id="texxts">
          <h3 id="style">Tours | 6 days</h3>
          <h1>
            Destination of <br></br>Our Agency
          </h1>
        </div>
        <div className="row">
          <div className="sign">D1</div>
          <div className="text">Sukhbaatar Square</div>
        </div>
        <div className="row">
          <div className="sign">D2</div>
          <div className="text">Sukhbaatar Square</div>
        </div>
        <div className="row">
          <div className="sign">D3</div>
          <div className="text">Sukhbaatar Square</div>
        </div>
        <div className="row">
          <div className="sign">D4</div>
          <div className="text">Sukhbaatar Square</div>
        </div>
        <div className="row">
          <div className="sign">D5</div>
          <div className="text">Sukhbaatar Square</div>
        </div>
        <div className="row">
          <div className="sign">D6</div>
          <div className="text">Sukhbaatar Square</div>
        </div>
      </div>
      <div id="right-side">
        <img src="image-5.png" alt="" />
      </div>
    </div>
  );
};
