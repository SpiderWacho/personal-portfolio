import React, { useEffect } from 'react'
import Header from './Header' 
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react'; 

const Layout = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [width, setWidth] = useState(window.innerWidth);



  useEffect(() => {

  console.log(width);
      const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);


  const goToContact = () => {
    if (location.pathname === '/portfolio') {
      let contactSection = document.querySelector('.contact-content');
      contactSection.scrollIntoView({ behavior: "smooth"})
    }
    else {
      navigate("/portfolio", {state: 'contact'});
    }
  }

  const goToHome = () => {
    if (location.pathname === '/portfolio') {
      let homeSection = document.querySelector('.homepage');
      homeSection.scrollIntoView({ behavior: "smooth"})
    }
    else {
      navigate("/portfolio", {state: 'home'});
    }
  }

  const goToProjects = () => {
    if (location.pathname === '/portfolio') {
      let projectsSection = document.querySelector('.projects-content');
      projectsSection.scrollIntoView({ behavior: "smooth"})
    }
    else {
      navigate("/portfolio", {state: 'projects'});
    }
  }

  return (
    <>
    {width  > 600 ? <Header classProp="header" goToContact={goToContact} goToHome={goToHome} goToProjects={goToProjects} ></Header> : null}
    {children}
    {width < 600 ? <Header classProp="header-footer" goToContact={goToContact} goToHome={goToHome} goToProjects={goToProjects}></Header> : <div className='footer'>
      <p className='footer-text'>Gaston Vecchio</p>

    </div>}

    </>

  )
}

export default Layout