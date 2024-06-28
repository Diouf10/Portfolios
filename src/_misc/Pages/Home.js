import './Home.css';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Home.css'

function Home() {

    // Typescripted
    const typeScriptRef = useRef(null);
    const cursorRef = useRef(null);

  useEffect(() => {
    const emploi = ["front-end", "backend", "fullstack"]; 
    const type = "Je suis un apprenti développeur ";

    const typeScript = typeScriptRef.current;
    const cursor = cursorRef.current;

    if (!typeScript || !cursor) {
      console.error("Element with id 'typeScript' or class 'cursor' not found.");
      return;
    }

    const handleMouseMove = (e) => {
      cursor.setAttribute('style', `top:  ${e.pageY - 25}px; left: ${e.pageX - 25}px;`);
    };

    const handleClick = () => { 
      //console.log("%c Click...!!!", "font-size: 20px; color:mediumspringgreen;");
      cursor.classList.add('cursor--expand');
      console.log(cursor.classList);
      setTimeout(() => {
        cursor.classList.remove('cursor--expand');
      }, 200);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    var typed = new Typed(typeScript, {
        strings: emploi.map(job => `${type} ${job}`),
        typeSpeed: 150,
        backSpeed: 450,
        loop: true
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      typed.destroy();
    };
  }, []);

  //Télécharger Documents
  // voir chat gpt


  
  //  Rendu de la page
  return (
    <>
      <div className="textTypeScript">
        <h1
          className="title_name"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300"
        >
          Mouhammad Wagane Diouf
        </h1>
        
        <h2 className="typescript" ref={typeScriptRef}>Je</h2> 
        <span className='cursor' ref={cursorRef}></span>

        <h3 className="cv_btn"> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <a  href="Docs/pdf/cv_Diouf_Mouhammad.pdf" download>Télécharger mon CV</a>
        </h3>
      </div>
      <div className="titleTypeScript">
      </div>
    </>
  );
}

export default Home;
