import './gamezone.css'

import tictactoe from '../img/tictactoe.png'
import battleship from '../img/battleship.png'
import memory from '../img/memorygame.png'
import sketch from '../img/sketch.png'
import rock from '../img/rockpaperscissors.png'

import { useState } from 'react'

import { useNavigate } from "react-router-dom";
import { useLanguageContext } from '../context/LanguageContext';

import Header from './Header';

function GameZone() {
  let {language, setLanguage} = useLanguageContext();

  const navigate = useNavigate();
  
  const goToPortfolio = () => {
      navigate("/portfolio", {state: {portfolio: true}})
    }

    const goToContact = () => {
      navigate("/portfolio", {state: {contact: true}})
    }

    const goToHome = () => {
      navigate("/portfolio", {state: {home: true}})
    }
  
  const [url, setUrl] = useState('https://spiderwacho.github.io/tictactoe/')
  const [title, setTitle] = useState(`${language === 'english' ? 'TIC TAC TOE' : 'TA TE TI'}`);
  const [description, setDescription] = useState('A project where i tried to apply the modular design pattern, also i used the minimax algorithm to make the player play with the computer.');
  


  const selectGame = (game) => {
    switch (game) {
      case 'tictactoe':
        setUrl('https://spiderwacho.github.io/tictactoe/');
        setTitle(`${language === 'english' ? 'TIC TAC TOE' : 'TA TE TI'}`)
        setDescription(`${language === 'english' ? `In this project the idea was to apply the things
         that i learned about the modular design pattern, also i used the minimax algorithm to make the player play with the computer.` 
         : `En este proyecto la idea era aplicar los conceptos que aprendi sobre el patron de diseño modular, ademas implemente el algoritmo MINMAX para
         que la computadora pueda jugar contra el usuario`}`)
        break;
      case 'battleship':
        setUrl('https://spiderwacho.github.io/battleship/');
        setTitle(`${language === 'english' ? 'BATTLESHIP' : 'BATALLA NAVAL'}`)
        setDescription(`${language === 'english' ?  `The goal of this project was to apply the lessons learned about TDD (Test Driven Development). 
        I learned and used Jest for this project.`
         : `El objetivo de este proyecto era aplicar las lecciones sobre TDD (Desarollo dirigido por tests). 
         Aprendi y use Jest para este proyecto`}`)
        break;
      case 'memory':
        setUrl('https://spiderwacho.github.io/memory-game/');
        setTitle(`${language === 'english' ? 'MEMORY GAME' : 'JUEGO DE MEMORIA'}`)
        setDescription(`${language === 'english' ? `This project was my first approach to React.js,
         using functional and class components, state and the useEffect hook.`
          : `ESte proyecto fue mi primer acercamiento a React.Js, use componentes de clase y funcionales para aprender las diferencias entre ellos.
          Aprendi conceptos como estado, props, y hooks como useEffect.`}`)
        break;
      case 'sketch':
          setUrl('https://htmlpreview.github.io/?https://github.com/SpiderWacho/etch_a_sketch/blob/main/index.html');
          setTitle(`${language === 'english' ? 'ETCH A SKETCH' : 'DIBUJA ALGO'}`)
          setDescription(`${language === 'english' ? `The idea behind this little project was
           to implement the grid layout and apply basic concepts of programming like loops, this was one of my first projects` : `
           La idea detras de este pequeño proyecto era implementar la disposicion 'Grid' en CSS. Ademas la idea era usar un poco
            los conceptos basicos de programacion como loops. Este fue uno de mis primeros proyectos.`}`)
          break;
      case 'rock':
            setUrl('https://htmlpreview.github.io/?https://github.com/SpiderWacho/rock_paper_scisors/blob/main/index.html');
            setTitle(`${language === 'english' ? 'TIC TAC TOE' : 'PIEDRA, PAPEL, TIJERA'}`)
            setDescription(`${language === 'english' ? `This was my first project that used javascript.`: `Este fue mi primer proyecto para aprender Javascript.`}`)
            break;
      default:
        setUrl('https://spiderwacho.github.io/tictactoe/');
        break;
    }
    
  }
  
    return ( 
      <>
      <Header goToPortfolio={() => goToPortfolio()} goToContact={() => goToContact()} goToHome={() => goToHome()}/>
      <div className="gamezone-content">

            <h2 className='gamezone-title'>{language === 'english' ? 'Play Ground' : 'Zona de Juegos'}</h2>
            <div className='game-container'>
              <iframe className="game" src={url}></iframe>
              <div className='game-description-container'>
                <h2 className='game-title'>{title}</h2>
                <p className='game-description'>{description}</p>
              </div>
            </div>
            
          <div className="project-selector">
            <div className='preview-container'>
              <img className='preview-img' src={tictactoe} onClick={() => selectGame('tictactoe')}></img>
            </div>
            <div className='preview-container'>
              <img className='preview-img' src={battleship} onClick={() => selectGame('battleship')}></img>
            </div>
            <div className='preview-container'>
              <img className='preview-img' src={memory} onClick={ () => selectGame('memory')}></img>
            </div>
            <div className='preview-container'>
              <img  className='preview-img' src={sketch} onClick={ () => selectGame('sketch')}></img>
            </div>
            <div className='preview-container'>
              <img className='preview-img' src={rock} onClick={ () => selectGame('rock')}></img>
            </div>
          </div>
      </div>
      </>
    );
  }
  
  export default GameZone;