import { useState } from "react";
import { motion } from "framer-motion";
import "../components-style/Header.css";
import Nav from "../sub-components/Nav";
import BurgerNav from "../sub-components/BurgerNav";

function Header() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <section id="home" className="header">
      <div className="name-box">
        <a href="#header">
          <h1>Milad Gezabi</h1>
        </a>
      </div>

      <Nav />

          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        

        <div className={`menu ${menu_class}`}>
            <BurgerNav />
        </div>
      

    </section>
  );
}

export default Header;
