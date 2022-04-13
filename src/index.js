//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
var hour = today.getHours();

let greeting;

const headingColour = {
  color: ""
};

if (hour > 0 && hour < 12) {
  greeting = "Morning";
  headingColour.color = "red";
} else if (hour > 12 && hour < 18) {
  greeting = "Afternoon";
  headingColour.color = "green";
} else if (hour > 18 && hour <= 0) {
  greeting = "Night";
  headingColour.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={headingColour}>
    Good {greeting}
  </h1>,
  document.getElementById("root")
);
