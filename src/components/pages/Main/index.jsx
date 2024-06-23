import Time from "./Time";
import Section1_Welcome from "./Section1_Welcome";
import Section2_IntroAccess from "./Section2_IntroAccess";
import Section3_Banner from "./Section3_Banner";
import Section4_Feature from "./Section4_Feature";
import { useParams } from "react-router-dom";
import SomeComponent from "./SomeComponent";
const Main = () => {
  let { id } = useParams(); // URL 파라미터에서 id 값을 가져옴
  console.log(id);
  return (
    <>
      <Time></Time>

      <section id={"1"}>
        <Section1_Welcome />
      </section>
      <SomeComponent />
      <Section2_IntroAccess />
      <Section3_Banner />
      <Section4_Feature />
    </>
  );
};

export default Main;
