// src/providers/TimeProvider.js
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TimeContext from "./TimeContext";

export const TimeProvider = ({ children }) => {
  const [selectedTime, setSelectedTime] = useState("sunrise");
  const [initialTimeSet, setInitialTimeSet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      if (!initialTimeSet) {
        setSelectedTime(hours >= 7 && hours < 18 ? "sunrise" : "sunset");
        setInitialTimeSet(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTimeSet]);

  return (
    <TimeContext.Provider value={{ selectedTime, setSelectedTime }}>
      {children}
    </TimeContext.Provider>
  );
};

TimeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
