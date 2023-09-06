import { useRecoilState } from 'recoil'
import '../components-style/Header.css'
import { LangState } from '../components/Atoms.js'

function Nav () {
  const [toggleLang, setToggleLang] = useRecoilState(LangState)

  
  const getLinkText = (lang) => {
    return lang === 'EN' ? ['Home', 'About', 'Projects', 'Contact'] : ['Hem', 'Om mig', 'Projekt', 'Kontakt'];
  };


    return (
        <nav>
        <ul className='header-nav'>
          <li>
            <a href="#home"> {getLinkText(toggleLang)[0]} </a>
          </li>
          <li>
            <a href="#about"> {getLinkText(toggleLang)[1]} </a>
          </li>
          <li>
            <a href="#projects"> {getLinkText(toggleLang)[2]} </a>
          </li>
          <li>
            <a href="#contact"> {getLinkText(toggleLang)[3]} </a>
          </li>
        </ul>
      </nav>
    )
}

export default Nav