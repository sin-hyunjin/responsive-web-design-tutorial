import { useRef, useEffect } from "react";
import { useTime } from "@context/TimeContext";
import Typed from "typed.js";

const Section1_Welcome = () => {
  const { selectedTime } = useTime();
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Thinker", "FE Developer"],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/*  Section1 : welcome */}
      <section className={`home-inner ${selectedTime}`}>
        <div className="home-heading">
          <h1 className="name">sin hyunjin</h1>
          <div className="name-hr"></div>

          <em id="typing">
            <span>Creative</span> <h3 ref={el} />
          </em>
          <div className="home-btns">
            <a href="#none" className="btn start">
              <span>Go Abouto </span>
            </a>
            <a href="#none" className="btn guide">
              <span>Go Projects</span>
            </a>
          </div>
        </div>
        <div className="mouse">
          <div className="wheele"></div>
        </div>
      </section>
    </>
  );
};

export default Section1_Welcome;
