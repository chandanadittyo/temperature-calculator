import React from "react";

const BoilingVerdicts = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>Water will not boil</p>;
};

export default BoilingVerdicts;
