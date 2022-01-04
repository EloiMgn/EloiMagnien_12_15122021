import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../utils/Assets/logo.svg';
import Dropdown from '../Dropdown/Dropdown';

/**
 * return Header component
 */
const Header = function() {

  return (
      <header className="header">
				<Link to="/" className='header__mainNav-link'><img src={Logo} className="header__mainLogo" alt="Logo SportSee" /></Link>
				<div className='header__mainNav'>
					<Link to="/" className='header__mainNav-link'>Accueil</Link>
					<Dropdown className='header__mainNav-link'/>
          <Link to="/settings" className='header__mainNav-link'>Réglages</Link>
          <Link to="/community" className='header__mainNav-link'>Communauté</Link>
				</div>
			</header>
  );
};

export default Header;

