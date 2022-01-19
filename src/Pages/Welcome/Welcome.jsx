import { Link } from 'react-router-dom';
import './Welcome.scss';


/**
 * Return react component Welcome page for the landing path
 * @returns { JSX.Element } 
 */
const Welcome = () => (
  <div className='welcome'>
    <div className='welcome__text'>
    Bienvenue sur votre Tableau de bord <strong>SportSee</strong>, veuillez vous identifiez :
    </div>
    <div className='welcome__links'>
    <Link to="/12/Karl" className='welcome__links__link'>Karl</Link>
    <Link to="/18/Cecilia" className='welcome__links__link'>Cecilia</Link>
    </div>
  </div>
  );

export default Welcome;