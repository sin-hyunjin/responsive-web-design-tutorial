/* slickSlide */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* image */
import { slideWelcome01, slideWelcome02, slideWelcome03 } from "@assets/img";

const Section1_Welcome = () => {
  const settings = {
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    pauseOnHover: false, // 마우스를 올릴시 멈춤 현상 제거
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <>
      {/*  Section1 : welcome */}
      <section className="welcome">
        <div className="slideshow">
          <Slider {...settings}>
            <div>
              <img src={slideWelcome01} alt="Slide 1" />
            </div>
            <div>
              <img src={slideWelcome02} alt="Slide 2" />
            </div>
            <div>
              <img src={slideWelcome03} alt="Slide 3" />
            </div>
          </Slider>
        </div>
        <div className="welcome-heading">
          <span> 창의적인 아이디어를 만드는 가장 빠른 방법</span>
          <h1>
            An idea solution of startup for your
            <em id="typing">3가지 타이핑 텍스트 자리</em>
          </h1>
          <p>
            스타트업 메이트 앱이 여러분의 최상의 스타트업 구축을 위해 창의적인
            아이디어를 제공하는 데 최선을 다하겠습니다.
          </p>
          <div className="welcome-btns">
            <a href="#none" className="btn start">
              CEO 시작하기
            </a>
            <a href="#none" className="btn guide">
              사용자 가이드
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
