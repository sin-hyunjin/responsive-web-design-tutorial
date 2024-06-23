// src/contexts/TimeContext.js
import { createContext, useContext } from "react";

const TimeContext = createContext();

export const useTime = () => {
  return useContext(TimeContext);
};

export default TimeContext;
