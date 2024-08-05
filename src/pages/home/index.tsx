import HomeContent from "@/component/home-content";
import "./home.css";
import CardContent from "@/component/card-content";
import { MyExperiences } from "@/untils/content";

const HomePage = () => {
  const Experiences = () => {
    return (
      <HomeContent id="experiences">
        <h2 className="title">
          My
          <span className="sub-title"> Experiences</span>
        </h2>
        <p className="exps-description">
          There are many variations of passages ofLorem Ipsum available, but the
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>

        <div className="cards">
          {MyExperiences.map((item, index) => {
            return <CardContent key={index} item={item} />;
          })}
        </div>
      </HomeContent>
    );
  };

  return (
    <div className="container fex flex-col">
      <HomeContent id="info">info</HomeContent>
      {Experiences()}
    </div>
  );
};

export default HomePage;
