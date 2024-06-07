import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Container = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Header />
      {/* Outlet은 중첩 라우팅을 통해 상위 컴포넌트를 레이아웃화 할 수 있고 {children}을 사용하는 것과 같은 효과가 난다. */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Container;
