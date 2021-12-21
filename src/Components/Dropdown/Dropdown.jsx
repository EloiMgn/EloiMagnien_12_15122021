/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = function() {

const [isOpen, setIsOpen] = useState(false);
const handleMouseHover = () => {
  setIsOpen(true);
};

const handleMouseOut = () => {
  setIsOpen(false);
};

  return (
    <div onMouseOver={handleMouseHover} onMouseOut={handleMouseOut} className='header__mainNav-link dropdown'>
      <p className='dropdown__title'>Profil</p>
    <ul className={isOpen ? 'dropdown__menu' : 'dropdownClose'}>
        <Link to="/12" className={isOpen ? 'header__mainNav-link' : 'hidden'}>Karl</Link>
        <Link to="/18" className={isOpen ? 'header__mainNav-link' : 'hidden'}>Cecilia</Link>
    </ul>
    </div>
  );
};

export default Dropdown;