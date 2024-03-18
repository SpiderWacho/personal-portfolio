import './homepage.css';
import React from 'react';
import Layout from './Layout';
import Projects from './Projects';
import Contact from './Contact';
import avatar from '../img/profile.jpeg';
import { useState, useEffect } from 'react';
import { redirect, useLocation } from 'react-router-dom';
import Atropos from 'atropos';
import 'atropos/css';

import { useLanguageContext } from '../context/LanguageContext';

function HomePage() {
  const { state } = useLocation();

  let { language } = useLanguageContext();

  //Context provider modo oscuro y claro
  //Ingles espanol
  const [front, setFront] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrolled) {
      if (state === 'contact') {
        let contactSection = document.querySelector('.contact-content');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else if (state === 'projects') {
        let projectsSection = document.querySelector('.projects-content');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      } else if (state === 'home') {
        let homeSection = document.querySelector('.homepage');
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
      setScrolled(true);
    }
  }, [scrolled, state]);

  const changeSide = () => {
    if (front) {
      setFront(false);
    } else {
      setFront(true);
    }
  };
  /* 
  const getPDF = () => {

    fetch('/gastonVecchio-cv.pdf')
      .then((response) => {
        console.log(response);
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'gastonVecchio-cv.pdf';
          alink.click();
        });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }; */

  // Initialize
  // eslint-disable-next-line no-unused-vars
  const myAtropos = Atropos({
    el: '.my-atropos',
    rotateXMax: 8,
    rotateYMax: 5

    // rest of parameters
  });

  return (
    <>
      <Layout>
        <div className="homepage-container">
          <div className="homepage">
            <div className="content">
              <div className="background"></div>

              <div className="profile-container">
                <div className="atropos my-atropos">
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner">
                        <div className="profile-content">
                          {front === true && (
                            <div className="front">
                              <img className="profile" src={avatar} alt="myself"></img>
                              <h1 className="title name"> GASTON VECCHIO</h1>
                              <h2 className="subtitle lastname">
                                {language === 'spanish' ? 'DESAROLLADOR WEB' : 'WEB DEVELOPER'}
                              </h2>
                              <div className="button-container">
                                <a
                                  href="/portfolio/gastonVecchio-cv.pdf"
                                  download
                                  className={`profile-button a-link`}>
                                  Curriculum
                                </a>

                                <button
                                  className="profile-button"
                                  type="button"
                                  onClick={() => {
                                    redirect('mailto:gastonvecch@gmail.com');
                                  }}>
                                  {language === 'english' ? 'Mail' : 'Correo'}
                                </button>
                              </div>
                              <div className="corner-flip" onClick={(e) => changeSide(e)}>
                                <p className="corner-text">
                                  {language === 'spanish' ? 'Sobre mi' : 'About me'}
                                </p>
                              </div>
                            </div>
                          )}
                          {front === false && (
                            <div className="back">
                              <div className="description-info">
                                <h2 className="description-subtitle">About me</h2>
                                <p className="description-p">Hi there!</p>
                                <p className="description-p">
                                  {language === 'spanish'
                                    ? `Soy un programador que se ha formado en gran medida de forma autodidacta.
                                     Completé el curso "CS50: Introduction to computer science" y actualmente
                                      estoy trabajando en  "The Odin Project" para seguir aprendiendo y mejorando mis habilidades.`
                                    : `
                                  As a self-motivated learner, I've developed my programming skills
                                  through independent study. I've completed CS50's Introduction to
                                  Computer Science and am currently working through The Odin Project
                                  to further enhance my knowledge base.`}
                                </p>
                              </div>
                              <div className="description-profile">
                                <img className="profile-back" src={avatar} alt="myself"></img>
                                <h1 className="title-back"> GASTON VECCHIO</h1>
                              </div>
                              <div className="corner-flip" onClick={(e) => changeSide(e)}>
                                <p className="corner-text">
                                  {language === 'spanish' ? 'Contacto' : 'Contact'}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <svg
                preserveAspectRatio="none"
                className="curve"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="58"
                viewBox="0 0 2000 300"
                fill="none">
                <path
                  width="100%"
                  height="100%"
                  d="M0 214.286L111.111 192.857C222.222 171.429 444.444 128.571 666.667 128.571C888.889 128.571 1111.11 171.429 1333.33 157.098C1555.56 143.304 1777.78 70.9821 1888.89 35.7589L2000 0V300H1888.89C1777.78 300 1555.56 300 1333.33 300C1111.11 300 888.889 300 666.667 300C444.444 300 222.222 300 111.111 300H0V214.286Z"
                  fill="#F3F4F5"
                />
              </svg>
            </div>

            <Projects />
            <Contact />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomePage;
