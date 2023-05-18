import React from "react";
import "./BoilingVerdicts.css";

const BoilingVerdicts = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>Water will not boil</p>;
};

export default BoilingVerdicts;
