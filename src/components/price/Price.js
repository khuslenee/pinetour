import React from "react";
import "./Price.css";

export const Price = () => {
  return (
    <div id="price-container">
      <div id="price-text">
        <h3>PRICING</h3>
        <h1>
          Pricing of <br />
          Our Agency
        </h1>
      </div>

      <div className="price-packages">
        <div className="price-box">
          <h4>Starter pack</h4>
          <ul className="inline-list">
            <li>Starter pack</li>
            <li>Trip</li>
            <li>Hotel</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
          <div className="price">
            <h4>$2100</h4>
          </div>
        </div>

        <div className="price-box">
          <h4>Luxury Pack</h4>
          <ul className="inline-list">
            <li>Starter pack</li>
            <li>Flights</li>
            <li>Cruise Trip</li>
            <li>Cruise Trip</li>
          </ul>
          <div className="price">
            <h4>$4200</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
