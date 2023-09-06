import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRecoilState } from "recoil";
import { LangState } from "./Atoms";
import "../components-style/Hero.css";
import Switch from "../sub-components/Switch.jsx";

function Hero() {
  const [toggleLang, setToggleLang] = useRecoilState(LangState);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const ToggleLang = () => {
    if (toggleLang === "SV") {
      setToggleLang("EN");
    } else {
      setToggleLang("SV");
    }
  };

  return (
    <section className="hero">
      <motion.div
        ref={ref}
        className="intro-box"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {toggleLang === "EN" ? (
          <h2>
            <span data-text="Milad Gezabi" className="loading">
              Milad Gezabi
            </span>{" "}
            <br />
            Front-end <br />
            Developer
          </h2>
        ) : (
          <h2>
            <span data-text="Milad Gezabi" className="loading">
              Milad Gezabi
            </span>{" "}
            <br />
            Front-end <br />
            Utvecklare
          </h2>
        )}
      </motion.div>

      <div className="switch-box">
        <h4 onClick={() => ToggleLang()}>{toggleLang}</h4>

        <Switch />
      </div>
    </section>
  );
}

export default Hero;
