import {
  quotationMarkSvg,
  iconFaceCeo,
  btnAppstore,
  btnPlaystore,
  accessMockup,
} from "@assets/img";

const Section2_IntroAccess = () => {
  return (
    <>
      {/* Section2 : intro-access */}
      <section className="intro-access">
        {/* Intro Inner Container */}
        <div className="intro-inner">
          <div className="intro-content">
            {/* Intro Left Section */}
            <div className="intro-left">
              <img src={quotationMarkSvg} alt="quotationMarkSvg" />
              <h3>3 Pre-made Solutions for your Startup Business</h3>
              <p>
                창의적인 아이디어를 가장 빠르게 창출할 수 있는 최고의 앱
                솔루션을 제공합니다. 여러분의 스타트업을 더욱 성장시키기 위해 온
                힘을 다할 것이며 STARTUP MATE 라는 이름답게 항상 동반자가
                되겠습니다. 감사합니다.
              </p>
              <span>앤드류 - 스타트업 메이트 대표이사</span>
            </div>
            {/* Intro Right Section */}
            <div className="intro-right">
              <div className="intro-msg">
                <h3>
                  Application Downloads
                  <big>30,000+</big>
                </h3>
                <p>
                  스타트업메이트는 앱 다운로드 30,000명 이상의 앱 사용자의
                  충분한 피드백을 통해 검증된 서비스를 제공합니다
                </p>
              </div>
              <div className="intro-photo">
                <img src={iconFaceCeo} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Intro Access Container */}
        <div className="access-inner">
          <div className="access-content">
            {/* Access Left Section */}
            <div className="access-left">
              <h2>
                언제나 어디서나 즐겁고 편리한 액세스 스타트업 CEO들의 커뮤니티
              </h2>
              <p>
                언제나 어디서나. 즐겁고 편리한 액세스가 가능합니다. 회원 가입은
                쉽고 간단합니다. 무료 회원 가입 후 로그인하시면 업데이트 된
                스타트업 메이트의 서비스를 받으실 수 있습니다.
              </p>
              <div className="btn-download">
                <a href="#none">
                  <img src={btnAppstore} alt="" />
                </a>
                <a href="#none">
                  <img src={btnPlaystore} alt="" />
                </a>
              </div>
            </div>
            {/* Access Right Section */}
            <div className="access-right">
              <img src={accessMockup} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2_IntroAccess;
