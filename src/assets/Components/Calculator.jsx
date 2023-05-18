import React, { useState } from "react";
import BoilingVerdicts from "./BoilingVerdicts";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from "./lib/converter";
import "./Calculator.css";

const Calculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("Celsius");

  const celsius =
    scale === "Fahrenheit" ? convert(temperature, toCelsius) : temperature;
  const farhenheit =
    scale === "Celsius" ? convert(temperature, toFahrenheit) : temperature;

  const handleTemperature = (e, temperatureType) => {
    setTemperature(e.target.value);
    setScale(temperatureType);
  };

  return (
    <div className="fullBody">
      <div className="upperBody">
        <TemperatureInput
          parameter={"Celsius"}
          temperature={celsius}
          onTemperatureChange={handleTemperature}
        />

        <TemperatureInput
          parameter={"Fahrenheit"}
          temperature={farhenheit}
          onTemperatureChange={handleTemperature}
        />
      </div>

      <BoilingVerdicts celsius={parseFloat(temperature)} />
    </div>
  );
};

export default Calculator;
