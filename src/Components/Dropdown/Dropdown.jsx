import { Link } from 'react-router-dom';
import './Dropdown.scss';

/**
 * Return react component Dropdown 
 * @returns { JSX.Element } 
 */
const Dropdown = () => (
    <nav className="header__mainNav-link dropdown__link">
      <ul>
        <li className="menu-deroulant">
        <span to="#">Profil</span>
          <ul className="sous-menu">
            <li className="sous-menu__link"><Link to="/12/Karl" >Karl</Link></li>
            <li className="sous-menu__link"><Link to="/18/Cecilia" >Cecilia</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );

export default Dropdown;