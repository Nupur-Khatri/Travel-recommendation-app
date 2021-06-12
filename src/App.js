import "./styles.css";
import React from "react";
import { useState } from "react";

const travel = {
  India : [
    { name: "KASHMIR", about:"EVER SEEN “PARADISE ON EARTH?! It is often referred to as heaven due to its beautiful nature, environment. It inculcates all the powers of beauty - lakes, gardens, heritage, immeroable culture, spices, snowy weather and much more to explore!. So when are you coming? Kashmir is waiting for you!! "},
    { name: "South India", about:"HIKING IN SOUTH INDIA – WHAT “ELSE” TO DO IN YOUR GREAT SOUTH INDIAN EXPERIENCE! South India is for sure one of the best places to visit in India. It holds the intricate heritage and culture of India starting from the ancient way of serving food in the most traditional way i.e. on the leaf of banana tree. I am going South India for sure! When are you coming down ?!! "}
  ],
  Singapore:[
    {name: "SINGAPORE", about:"Whether you’re a nature lover, culture buff, thrill-seeker or cocktail enthusiast, Singapore has a wide selection of leisure offerings within easy reach."}
  ],
  USA:[
    {name: "NEW YORK", about:"Its the most attractive places to me and if you visit then for you too! It has so much to do - museums, Statue of liberty, food, sight-seeing, playing, roaming around and so so much. I am surely visiting it. Do you? "},
    {name: "LOS ANGELES", about:"No less than angely city! I am in love with its culture and beauty. We can have hop-on-hop-off bus tour, Hollywood sight-seeing and and visiting your favourite stars homes and can do Grand sight seeing LA tour. I am dying to visit it! Lets go... "}
  ]
}

export default function App() {
 const [selectCountry,setselectCountry] = useState("India");
 function onClickHandler(country) {
   setselectCountry(country);
 }

  return (
    <div className="App">
      <h1 style={{
        display: "block",
        fontSize: "2rem",
        marginBlockStart: "0.67rem",
        marginBlockEnd: "0.67rem",
        marginInlineStart: "0rem",
        marginInlineEnd: "0rem",
        fontWeight: "bold"
      }}>
      Find your Dream Destination</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favourite Destinatons. Select a Country to get started{" "}
      </p>
      <div>
        {Object.keys(travel).map((country) => (
          <button
            onClick={() => onClickHandler(country)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {country}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travel[selectCountry].map((city) => (
            <li
              key={city.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {city.name} </div>
              <div style={{ fontSize: "smaller" }}> {city.about} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
