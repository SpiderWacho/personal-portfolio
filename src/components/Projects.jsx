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
          ? `This project aimed to apply my knowledge of Node.js, Express.js, MongoDB, and the MVC architecture.`
          : `El objetivo de este proyecto era aplicar todos los conocimientos adquiridos sobre Node.js y aplicaciones Express. Utilice MongoDB como base de datos y el modelo MVC para la organización del código. También utilice plantillas EJS para la interfaz del usuario.`
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
          ? `In this project, I solidified my understanding of React by building upon my initial exposure to the framework. 
          I practiced creating functional and class components, utilizing state management, and effectively passing props.`
          : `El objetivo de este proyecto era aplicar los conocimientos adquiridos sobre React en un primer acercamiento. Se implementaron componentes tanto basados en clases como funcionales, y se utilizaron hooks como useEffect y ContextManager para la gestión del estado y la comunicación entre componentes.          `
      }`,
      preview: cartPreview,
      inverted: true,
      aos: 'fade-right',
      redirectPreview: 'https://spiderwacho.github.io/shopping-cart/',
      redirectCode: `https://github.com/SpiderWacho/shopping-cart`
    },
    {
      image: cvIcon,
      title: `${language === 'english' ? 'CV CREATOR' : 'CREADOR DE CV'}`,
      description: `${
        language === 'english'
          ? `This React application allows users to create and customize their CV by filling out a form. 
          The application dynamically updates the CV template, enabling users to download a personalized CV upon completion.
          `
          : `Esta aplicación React permite a los usuarios crear y personalizar su CV completando un formulario. La aplicación actualiza dinámicamente la plantilla del CV, permitiendo a los usuarios descargar un CV personalizado al finalizar.`
      }`,
      preview: cvPreview,
      inverted: false,
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
