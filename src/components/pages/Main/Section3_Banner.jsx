import { useState } from "react";
import { bannerMock } from "@mocks";

//            component : Banner            //
const Section3_Banner = () => {
  //            state : activeTab 상태를 정의하고 초기값을 1로 설정           //
  const [activeTab, setActiveTab] = useState(1);
  //            state : 현재 activeTab에 해당하는 탭 데이터 가져오기            //
  const activeTabData = bannerMock.find((tab) => tab.id === activeTab);

  //         render : Banner            //
  return (
    <section className="banner">
      <div className="banner-inner">
        <div className="banner-content">
          {/* 탭 버튼 영역 */}
          <div className="tab-btn">
            {/* bannerMock 배열을 순회하며 각 탭 버튼 렌더링 */}
            {bannerMock.map((tab) => (
              <label key={tab.id} onClick={() => setActiveTab(tab.id)}>
                {/* 활성화된 탭인 경우 배경색을 변경 */}
                <em
                  style={{
                    backgroundColor: activeTab === tab.id ? "#34495e" : "",
                  }}
                >
                  {/*       탭 아이콘 이미지      */}
                  <img
                    src={tab.icon}
                    alt={tab.icon}
                    // 활성화된 탭인 경우 이미지 필터링 적용
                    style={{ filter: activeTab === tab.id ? "invert()" : "" }}
                  />
                </em>
                {/*       탭 라벨       */}
                <span
                  // 활성화된 탭인 경우 텍스트 색상을 변경
                  style={{
                    color: activeTab === tab.id ? "#34495e" : "",
                  }}
                >
                  {tab.label}
                </span>
              </label>
            ))}
          </div>

          {/*       탭 콘텐츠 영역      */}
          <div className="tabs">
            {/* 현재 activeTab에 해당하는 탭 콘텐츠 렌더링 */}
            <div className={`tab tab${activeTab}`}>
              {/* 탭 제목 */}
              <h2>{activeTabData.title}</h2>
              {/* 탭 내용 */}
              <p>{activeTabData.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3_Banner;
