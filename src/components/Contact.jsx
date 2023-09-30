import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { useLanguageContext } from '../context/LanguageContext';
import { forwardRef } from 'react';

import linkedin from '../img/linkedin.png'
import github from '../img/github-mark.png'

const Contact = forwardRef( function Contact(props, ref) {

    useEffect(() => {
        AOS.init();
      }, []);

      let {language, setLanguage} = useLanguageContext();
    
    return (
        <div className="contact-content" ref={ref}>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,96L60,117.3C120,139,240,181,360,208C480,235,600,245,720,229.3C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <h1 className='contact-title'>{language === 'english' ? 'Lets get in touch.' : 'Pongamonos en contacto.'} </h1>
            <div className='contact-card' data-aos="zoom-in-up">

                <a className="contact-logo-container" href="https://www.linkedin.com/in/gaston-vecchio-646881183/?originalSubdomain=ar">
                    <p className='contact-text'>Linkedin</p>
                    <img className='contact-logo' src={linkedin}>
                        
                    </img>
                    </a>
                    <a className="contact-logo-container" href="https://github.com/SpiderWacho">
                        <p className='contact-text'>Github</p>
                    <img className='contact-logo' id='github' src={github}>
                    
                    </img>
                    </a>

            </div>
        </div>

    )
})

export default Contact;