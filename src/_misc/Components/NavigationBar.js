
import logo from '../../assets/images/logo-MWD.png'
import './NavigationBar.css';
 
/**
* Barre de Navigation react-bootstrap.
* @return {jsx}
*/
function NavigationBar() {

  return (

    <nav role="navigation">
      <div id="menuToggle">
      
        <input type="checkbox" />
      
        <span></span>
        <span></span>
        <span></span>
      
        <ul id="menu">
          <a href='/'><li>Acceuil</li></a>
          <a href='/about'><li>À Propos</li></a>
          <a href='/skills'><li>Compétences</li></a>
          <a href='/projects'><li>Projets</li></a>
          <a href='/contact'><li>Contact</li></a>
        </ul>
      </div>

      <a href='/'>
        <img className='img-logo' src={logo} width='50px'/>
      </a>
    </nav>
  
  );
}
 
export default NavigationBar;