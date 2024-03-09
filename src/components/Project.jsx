/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguageContext } from '../context/LanguageContext';

function Project({
  image,
  title,
  description,
  preview,
  inverted,
  aos,
  redirectPreview,
  redirectCode
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  const redirect = (url) => {
    window.open(url, '_blank');
  };

  let { language } = useLanguageContext();

  return (
    <div className="project" id="project" data-aos={aos} data-aos-duration="1000">
      <div className={'project-left ' + (inverted === true ? 'inverted ' : '')}>
        <div className="project-image-container">
          <img className="project-image" src={image} alt="a logo that represent the project"></img>
        </div>
        <div className="project-button-container">
          <button
            type="button"
            className="project-button"
            onClick={() => {
              redirect(redirectPreview);
            }}>
            {language === 'english' ? 'Live Preview' : 'Demo'}
          </button>
          <button
            type="button"
            className="project-button"
            onClick={() => {
              redirect(redirectCode);
            }}>
            {language === 'english' ? 'View Code' : 'Codigo'}
          </button>
        </div>
      </div>

      <div className="division"></div>

      <div className={'project-right ' + (inverted === true ? 'inverted ' : '')}>
        <div className="project-description">
          <h2 className="project-subtitle">{title}</h2>
          <p>{description}</p>
          <img className="project-preview" alt="an screenshot of the project" src={preview}></img>
        </div>
      </div>
    </div>
  );
}

export default Project;
