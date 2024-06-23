// src/Time.js
import Section1_Welcome from "./Section1_Welcome";
import { useTime } from "@context/TimeContext";
const Time = () => {
  const { selectedTime, setSelectedTime } = useTime();

  const handleChange = (event) => {
    setSelectedTime(event.target.id);
  };

  return (
    <div className="time-inner" id={"0"}>
      <input
        type="radio"
        name="time"
        id="sunrise"
        checked={selectedTime === "sunrise"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="time"
        id="sunset"
        checked={selectedTime === "sunset"}
        onChange={handleChange}
      />
      <div className="time-content">
        <div className="glow"></div>
        <div className="sky"></div>
        <Section1_Welcome id={"1"} />
        <div className="stars"></div>
        <div className="times">
          {/* <div className="time">{formatTime(currentTime)}</div> */}
        </div>
        <div className="heavens">
          <label
            htmlFor="sunrise"
            className="sunrise"
            data-title=""
            onClick={() => setSelectedTime("sunrise")}
          ></label>
          <label
            htmlFor="sunset"
            className="sunset"
            data-title=""
            onClick={() => setSelectedTime("sunset")}
          ></label>
        </div>
        <div className="clouds"></div>
      </div>
    </div>
  );
};

export default Time;
