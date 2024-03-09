import './projects.css';
import React from 'react';
import Project from './Project';

import { forwardRef } from 'react';

import { useLanguageContext } from '../context/LanguageContext';

import crudImage from '../img/crud-icon.png';
import crudPreview from '../img/crud-preview.png';

import cvPreview from '../img/cv-preview.png';
import cvIcon from '../img/cv-icon.png';

import cartPreview from '../img/cart-preview.png';
import cartIcon from '../img/cart-icon.png';

const Projects = forwardRef(function Projects(props, ref) {
  let { language } = useLanguageContext();

  const projectsObj = [
    {
      image: crudImage,
      title: `${language === 'english' ? 'GAME STORE CRUD' : 'CRUD TIENDA DE JUEGOS'}`,
      description: `${
        language === 'english'
          ? `The objective of this project was to put in practice all the things
          that i learned about Node.js and Express applications. I also used MongoDB and the MVC model.`
          : `El objetivo de este proyecto era poner en practica todas las cosas que aprendi sobre Node.js y aplicaciones Express. Tambien use MongoDB para la base de datos, EJS y el modelo MVC.`
      }`,
      preview: crudPreview,
      inverted: false,
      aos: 'fade-left',
      redirectPreview: 'https://gamestore.adaptable.app/catalog',
      redirectCode: `https://github.com/SpiderWacho/inventory-application`
    },
    {
      image: cartIcon,
      title: `${language === 'english' ? 'SHOPPING PAGE' : 'PAGINA DE COMPRAS'}`,
      description: `${
        language === 'english'
          ? `The objective of this project was to apply the things that i learned
          about my first aproximation to the React Framework. I learned the differences between
           functional and class components, the use of states and props.`
          : `El objetivo de este proyecto fue usar todas las cosas que aprendi sobre React en un primer acercamiento,
            aprendi cosas como diferencia entre componentes basados en clases y funcionales, hooks como useEffect y ContextManager`
      }`,
      preview: cartPreview,
      inverted: false,
      aos: 'fade-right',
      redirectPreview: 'https://spiderwacho.github.io/shopping-cart/',
      redirectCode: `https://github.com/SpiderWacho/shopping-cart`
    },
    {
      image: cvIcon,
      title: `${language === 'english' ? 'CV CREATOR' : 'CREADOR DE CV'}`,
      description: `${
        language === 'english'
          ? `The objective of this project was to use React to make something useful.
          Here you can complete the fields of the form and it will updating the cv template,
           then you can dowload it.`
          : `El objetivo de este proyecto fue usar React para armar algo util. En el proyecto completas los compas del formulario y va a completarlos en la plantilla de CV`
      }`,
      preview: cvPreview,
      inverted: true,
      aos: 'fade-left',
      redirectPreview: 'https://spiderwacho.github.io/create-cv/',
      redirectCode: `https://github.com/SpiderWacho/create-cv`
    }
  ];

  return (
    <div className="projects-content-container">
      <div className="projects-content" id="projects" ref={ref}>
        <h2 className="title projects-title">
          {language === 'english' ? 'PROJECTS' : 'PROYECTOS'}
        </h2>

        {projectsObj.map((project, index) => {
          return (
            <Project
              image={project.image}
              title={project.title}
              description={project.description}
              preview={project.preview}
              inverted={project.inverted}
              aos={project.aos}
              redirectPreview={project.redirectPreview}
              redirectCode={project.redirectCode}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
});

//Crear object y mapear
//Inverted tomar indice del map

export default Projects;
