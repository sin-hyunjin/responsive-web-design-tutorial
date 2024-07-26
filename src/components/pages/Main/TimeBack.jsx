// src/Time.js

import { useTime } from "@context/TimeContext";
const TimeBack = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-tilte">
          <h3>About me</h3>
          <p>내용</p>
        </div>
        <div className="about-intro">
          <div className="intro-left">box1</div>
          <div className="intro-right">box2</div>
        </div>
      </div>
    </>
  );
};

export default TimeBack;
