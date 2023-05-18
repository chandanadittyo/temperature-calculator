import React, { useState } from "react";
import "./TemperatureInput.css";

const TemperatureInput = (props) => {
  const { parameter, onTemperatureChange, temperature } = props;

  return (
    <div>
      <fieldset>
        <legend>Enter Temperature in {parameter}</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, parameter)}
        />
      </fieldset>
    </div>
  );
};

export default TemperatureInput;
