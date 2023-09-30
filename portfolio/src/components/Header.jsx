import './header.css'
import { Link } from 'react-router-dom'
import { useLanguageContext } from '../context/LanguageContext'
import home from '../img/home.png'
import joystick from '../img/joystick.png'
import projects from '../img/project.png'
import contact from '../img/contact.png'
import night from '../img/clear-night.png'
import sun from '../img/sun.png'




function Header({goToPortfolio, goToContact, goToHome}) {
  let {language, setLanguage} = useLanguageContext();

    return (
      <div className="header">
        <span className='logo-container'>
          <div className='dropdown'> {language==='english' ? "EN" : "ES"}
          <p className='arrow'>▼</p>
            <div className='dropdown-container'>  
              <p className='dropdown-option' onClick={() => setLanguage('english')}>ENGLISH</p>
              <p className='dropdown-option' onClick={() => setLanguage('spanish')}>ESPA</p>
            </div>
          </div>
        </span>
        <div className="navbar-container">
        <div className="navbar-element" onClick={goToHome} >
          <div className='link-container'>
            <img className="logo" src={home}></img>
            {language==='spanish' ? 'INICIO' : 'HOME'}
          </div>
        </div>
          <span className='joystick-container '>
            <Link to='/portfolio/game_zone'>
            <div className='link-container'>
              <img className="joystick" src={joystick}></img>
              {language==='english' ? 'PLAYGROUND' : 'JUEGOS'}
            </div>
            </Link>
          </span>
          <div className="navbar-element" onClick={goToPortfolio} >
            <div className='link-container'>
              <img className="projects" src={projects} ></img>
              {language==='english' ? 'PROJECTS' : 'PROYECTOS'}
            </div>
          </div>

          <div className="navbar-element" onClick={goToContact}>
            <div className='link-container'>
                <img className="contact" src={contact}></img>
                {language==='english' ? 'CONTACT' : 'CONTACTO'}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  