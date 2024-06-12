import Section1_Welcome from "./Section1_Welcome";
import Section2_IntroAccess from "./Section2_IntroAccess";
import Section3_Banner from "./Section3_Banner";
import Section4_Feature from "./Section4_Feature";

const Main = () => {
  return (
    <>
      <section id="home">
        <Section1_Welcome />
      </section>
      <section id="about">
        <Section2_IntroAccess />
      </section>

      <Section3_Banner />
      <Section4_Feature />
    </>
  );
};

export default Main;
