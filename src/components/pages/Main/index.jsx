import Time from "./Time";
import Section2_IntroAccess from "./Section2_IntroAccess";
import Section3_Banner from "./Section3_Banner";
import Section4_Feature from "./Section4_Feature";
import { useLocation, useParams } from "react-router-dom";
import SomeComponent from "./SomeComponent";
import TimeBack from "./TimeBack";

const Main = () => {
  let { id } = useParams(); // URL 파라미터에서 id 값을 가져옴
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <>
      <Time></Time>
      <TimeBack></TimeBack>
      <SomeComponent />
      <Section2_IntroAccess />
      <Section3_Banner />
      <Section4_Feature />
    </>
  );
};

export default Main;
