// src/Time.js
import Section1_Home from "./Section1_Home";
import { useTime } from "@context/TimeContext";
const Time = () => {
  const { selectedTime, setSelectedTime } = useTime();

  const handleChange = (event) => {
    setSelectedTime(event.target.id);
  };

  return (
    <div className="time-inner" id={"home"}>
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
        <Section1_Home id={"home"} />
        <div className="glow"></div>
        <div className="sky"></div>

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
