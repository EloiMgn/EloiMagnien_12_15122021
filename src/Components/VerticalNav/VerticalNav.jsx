import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Yoga from '../../utils/Assets/yoga_icon.svg';
import Swim from '../../utils/Assets/swim_icon.svg';
import Cycle from '../../utils/Assets/cycle_icon.svg';
import Dumbbell from '../../utils/Assets/dumbbell_icon.svg';
import './VerticalNav.scss';

/**
 * Return react component Verticalnav based on user's id 
 * @param { string } id
 * @returns { HTMLElement } 
 */
const VerticalNav = ({id}) => {
if(id) {
  return (
      <div className="verticalNav">
        <nav className='verticalNav__nav'>
          <Link to={`/${id}/yoga`} className='yoga verticalNav__nav-link'><img src={Yoga} alt="Yoga logo" /></Link>
          <Link to={`/${id}/swimming`} className='swiming verticalNav__nav-link'><img src={Swim} alt="Swimming logo" /></Link>
          <Link to={`/${id}/bicyle`} className='bicyle verticalNav__nav-link'><img src={Cycle} alt="Bicyle logo" /></Link>
          <Link to={`/${id}/dumbell`} className='dumbbell verticalNav__nav-link'><img src={Dumbbell} alt="Dumbbell logo" /></Link>
        </nav>
        <p className='verticalNav__copyrights'>Copiryght, SportSee 2022</p>
      </div>
    );
  };
  return null;
};

VerticalNav.propTypes = {
  id: PropTypes.string,
};

VerticalNav.defaultProps = {
  id: '12-Karl',
};

export default VerticalNav;