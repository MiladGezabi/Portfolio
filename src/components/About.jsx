import "../components-style/About.css";
import { useRecoilState } from "recoil";
import { LangState } from "./Atoms.js";
import profilePic from "../assets/image0.jpeg";

function About() {
  const [toggleLang, setToggleLang] = useRecoilState(LangState);

  return (
    <section id="about" className="about">
      {toggleLang === "EN" ? (
        <>
          <h2>About me</h2>

          <div className="about-inner">
            <div className="image-box">
              <div className="avatar">
                <img src={profilePic} alt={profilePic} />
              </div>
            </div>

            <div className="text-box">
              Hello! My name is Milad Gezabi. I am UX/UI <br /> designer and
              Front-end web developer from <br /> Karlstad, Sweden. I´m
              passionate about learning <br /> new technologies and perfecting
              the ones i know.
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Om mig</h2>

          <div className="about-inner">
            <div className="image-box">
              <div className="avatar">
                <img src={profilePic} alt={profilePic} />
              </div>
            </div>

            <div className="text-box">
              Hej! Jag heter Milad Gezabi. Jag är UX/UI-designer <br /> och
              Front-end webbutvecklare från Karlstad, Sverige. Jag brinner{" "}
              <br /> för att lära mig nya tekniker och att förbättra de jag
              redan känner.
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default About;
