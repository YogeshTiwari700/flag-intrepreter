import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇦🇩": "Andorra",
  "🇦🇪": "United Arab Emirates",
  "🇦🇺": "Australia",
  "🇧🇩": "Bangladesh",
  "🇨🇭": "Switzerland",
  "🇨🇳": "China",
  "🇪🇸": "Spain",
  "🇮🇳": "India",
  "🇸🇬": "Singapore",
  "🇺🇸": "United States"
};

var countryWeKnow = Object.keys(flagDictionary);

export default function App() {
  var [country, setcountry] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var country = flagDictionary[userInput];

    if (country === undefined) {
      country = "we dont have database in our country";
    }
    setcountry(country);
  }

  function flagClickHandler(country) {
    var country = flagDictionary[country];
    setcountry(country);
    // console.log(country);
  }

  return (
    <div className="App">
      <h1> Flag Interpreter </h1>
      <input style={{ fontSize: "2rem" }} onClick={emojiInputHandler} />
      <h2>{country}</h2>
      <h3> Country We Know </h3>
      {countryWeKnow.map(function (country) {
        return (
          <span
            onClick={() => flagClickHandler(country)}
            style={{ fontSize: "2.3rem", padding: "0.5rem", cursor: "pointer" }}
            key={country}
          >
            {" "}
            {country}{" "}
          </span>
        );
      })}
    </div>
  );
}
