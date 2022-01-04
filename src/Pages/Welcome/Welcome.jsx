import { Link } from 'react-router-dom';
import './Welcome.scss';



const Welcome = () => (
  <div className='welcome'>
    <div className='welcome__text'>
    Bienvenue sur votre Tableau de bord <strong>SportSee</strong>, veuillez vous identifiez :
    </div>
    <div className='welcome__links'>
    <Link to="/12" className='welcome__links__link'>Karl</Link>
    <Link to="/18" className='welcome__links__link'>Cecilia</Link>
    </div>
  </div>
  );

export default Welcome;