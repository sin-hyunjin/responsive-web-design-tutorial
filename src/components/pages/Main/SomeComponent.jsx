// src/SomeComponent.js

import { useTime } from "../../../context/TimeContext";

const SomeComponent = () => {
  const { selectedTime, setSelectedTime } = useTime();

  const handleSunriseClick = () => {
    console.log("Sunrise button clicked");
    setSelectedTime("sunrise");
  };

  const handleSunsetClick = () => {
    console.log("Sunset button clicked");
    setSelectedTime("sunset");
  };

  return (
    <div>
      <p>Current Time: {selectedTime}</p>
      <button onClick={handleSunriseClick}>Sunrise</button>
      <button onClick={handleSunsetClick}>Sunset</button>
    </div>
  );
};

export default SomeComponent;
