import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faJava, faPhp, faUnity, faGit, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faTerminal, faServer, faGem } from '@fortawesome/free-solid-svg-icons';

import './Skills.css';

function Skills() {
  return (
    <div className="skills-section">
      <h1>Mes Compétences</h1>

      <div className="skills-table">

      <div className="skill-component html">
  <FontAwesomeIcon icon={faHtml5} size="3x" />
  <h3>HTML</h3>
  <p>Maîtrise des langages de balisage permettant la création de pages web statiques.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
  </div>
</div>

<div className="skill-component css">
  <FontAwesomeIcon icon={faCss3Alt} size="3x" />
  <h3>CSS</h3>
  <p>Connaissance approfondie des styles CSS pour la mise en page et la conception graphique.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
  </div>
</div>

<div className="skill-component js">
  <FontAwesomeIcon icon={faJs} size="3x" />
  <h3>Javascript</h3>
  <p>Compétence dans la programmation côté client pour rendre les sites web interactifs et dynamiques.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble"></div>
  </div>
</div>

<div className="skill-component java">
  <FontAwesomeIcon icon={faJava} size="3x" />
  <h3>Java</h3>
  <p>Expérience dans le développement d'applications logicielles à grande échelle avec Java.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble"></div>
  </div>
</div>

<div className="skill-component php">
  <FontAwesomeIcon icon={faPhp} size="3x" />
  <h3>PHP</h3>
  <p>Connaissance des langages de programmation pour le développement web dynamique.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  </div>
</div>

<div className="skill-component unity">
  <FontAwesomeIcon icon={faUnity} size="3x" />
  <h3>Unity</h3>
  <p>Compétence dans la création de jeux et d'applications interactives avec Unity.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  </div>
</div>

<div className="skill-component git">
  <FontAwesomeIcon icon={faGit} size="3x" />
  <h3>Git</h3>
  <p>Expérience dans l'utilisation de Git pour le contrôle de version et la collaboration de développement.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  </div>
</div>

<div className="skill-component c">
  <FontAwesomeIcon icon={faC} size="3x" />
  <h3>C</h3>
  <p>Compétence dans la programmation système et bas niveau avec le langage C.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  </div>
</div>

<div className="skill-component terminal">
  <FontAwesomeIcon icon={faTerminal} size="3x" />
  <h3>Terminal (Bash-WSL)</h3>
  <p>Maîtrise de l'utilisation de la ligne de commande et de Bash sur les systèmes basés sur Unix.</p>
  <div className="skill-level">
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble active"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  </div>
</div>

<div className="skill-component api">
          <FontAwesomeIcon icon={faServer} size="3x" />
          <h3>API RESTFULL</h3>
          <p>Interface de programmation qui permet à différents logiciels de communiquer entre eux.</p>
          <div className="skill-level">
            <div className="bubble active"></div>
            <div className="bubble active"></div>
            <div className="bubble active"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>

        <div className="skill-component python">
          <FontAwesomeIcon icon={faPython} size="3x" />
          <h3>Python</h3>
          <p>Langage de programmation polyvalent et facile à apprendre, utilisé pour le développement web, l'analyse de données, et plus encore.</p>
          <div className="skill-level">
            <div className="bubble active"></div>
            <div className="bubble active"></div>
            <div className="bubble active"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>

        <div className="skill-component react">
          <FontAwesomeIcon icon={faReact} size="3x" />
          <h3>React JS</h3>
          <p>Bibliothèque JavaScript pour construire des interfaces utilisateur.</p>
          <div className="skill-level">
            <div className="bubble active"></div>
            <div className="bubble active"></div>
            <div className="bubble active"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>

        <div className="skill-component ejs">
          <FontAwesomeIcon icon={faGem} size="3x" />
          <h3>Express JS</h3>
          <p>Moteur de template pour générer des pages HTML avec du code JavaScript.</p>
          <div className="skill-level">
            <div className="bubble active"></div>
            <div className="bubble active"></div>
            <div className="bubble active"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Skills;
