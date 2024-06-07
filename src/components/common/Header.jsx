import Images from "@assets/img";

const Header = () => {
  return (
    // inner
    <header>
      <div className="header-inner">
        {/* light Logo */}
        <div className="logo">
          <a href="#none">
            <img src={Images.logo} alt="Company Logo" />
          </a>
        </div>

        <div className="gnb">
          <a href="#none">CEO 인사말</a>
          <a href="#none">서비스 특징</a>
          <a href="#none">자주 묻는 질문들</a>
          <a href="#none">경영비전</a>
          <a href="#none">사용자 리뷰</a>
          <a href="#none">앱 사용자 가이드</a>
          <a href="#none">최신소식</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
