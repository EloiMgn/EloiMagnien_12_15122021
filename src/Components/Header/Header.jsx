import './Header.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../utils/Assets/Img/logo.svg';
import Dropdown from '../Dropdown/Dropdown';

/**
 * Return react component Header based on user's id
 * @param { string } id
 * @param { string } name
 * @returns { JSX.Element } 
 */
const Header = ({id, name}) => {
if(id){
	return (
				<header className="header">
					<Link to="/" className='header__mainNav-link'><img src={Logo} className="header__mainLogo" alt="Logo SportSee" /></Link>
					<div className='header__mainNav'>
						<Link to="/" className='header__mainNav-link'>Accueil</Link>
						<Dropdown className='header__mainNav-link'/>
						<Link to={`/${id}/${name}/settings`} className='header__mainNav-link'>Réglages</Link>
						<Link to={`/${id}/${name}/community`} className='header__mainNav-link'>Communauté</Link>
					</div>
				</header>
		);
	};
	return null;
};

Header.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default Header;
