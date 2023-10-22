import './header.css'
import { Link } from 'react-router-dom'
import { useLanguageContext } from '../context/LanguageContext'
import { useNavigate, useLocation } from "react-router-dom";

import home from '../img/home.png'
import joystick from '../img/joystick.png'
import projects from '../img/project.png'
import contact from '../img/contact.png'
import { useEffect, useRef } from 'react';

function Header({classProp, goToContact, goToHome, goToProjects}) {
  let {language, setLanguage} = useLanguageContext();



  const navigate = useNavigate();
  const location = useLocation();
    

    

    return (
      <div className='header-container'>
        <div className={classProp} >
          <span className='logo-container'>
            <div className='dropdown'> {language==='english' ? "ENG" : "ESP"}
            <p className='arrow'>▼</p>
              <div className='dropdown-container'>  
                <p className='dropdown-option' onClick={() => setLanguage('english')}>ENG</p>
                <p className='dropdown-option' onClick={() => setLanguage('spanish')}>SPA</p>
              </div>
            </div>
          </span>
          <div className="navbar-container">
          <div className="navbar-element"  >
            <div className='link-container'>
              <img className="logo" src={home} onClick={goToHome}></img>
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
            <div className="navbar-element"  >
              <div className='link-container'>
                <img className="projects" src={projects} onClick={goToProjects} ></img>
                {language==='english' ? 'PROJECTS' : 'PROYECTOS'}
              </div>
            </div>

            <div className="navbar-element" onClick={goToContact}>
              <div className='link-container'>
                  <img className="contact" src={contact} id='contact'></img>
                  {language==='english' ? 'CONTACT' : 'CONTACTO'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  