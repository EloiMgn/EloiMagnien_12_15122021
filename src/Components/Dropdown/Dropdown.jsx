import { Link } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = function() {

  return (
    <nav>
      <ul>
        <li className="menu-deroulant">
        <Link to="/">Profil</Link>
          <ul className="sous-menu">
            <li><Link to="/12" >Karl</Link></li>
            <li><Link to="/18" >Cecilia</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Dropdown;