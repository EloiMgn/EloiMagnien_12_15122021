import { Link } from 'react-router-dom';
import './Dropdown.scss';

/**
 * Return react component Dropdown 
 * @returns { HTMLElement } 
 */
const Dropdown = () => (
    <nav>
      <ul>
        <li className="menu-deroulant">
        <Link to="/">Profil</Link>
          <ul className="sous-menu">
            <li><Link to="/12-Karl" >Karl</Link></li>
            <li><Link to="/18-Cecilia" >Cecilia</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );

export default Dropdown;