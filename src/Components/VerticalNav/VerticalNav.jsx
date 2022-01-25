import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Yoga from '../../utils/Assets/Img/yoga_icon.svg';
import Swim from '../../utils/Assets/Img/swim_icon.svg';
import Cycle from '../../utils/Assets/Img/cycle_icon.svg';
import Dumbbell from '../../utils/Assets/Img/dumbbell_icon.svg';
import './VerticalNav.scss';

/**
 * Return react component Verticalnav based on user's id 
 * @param { string } id
 * @param { string } name
 * @returns { JSX.Element } 
 */
const VerticalNav = ({id, name}) => {
if(id) {
  return (
      <div className="verticalNav">
        <div className='verticalNav__nav'>
          <Link to={`/${id}/${name}/yoga`} className='yoga verticalNav__nav-link'><img src={Yoga} alt="Yoga logo" /></Link>
          <Link to={`/${id}/${name}/swimming`} className='swiming verticalNav__nav-link'><img src={Swim} alt="Swimming logo" /></Link>
          <Link to={`/${id}/${name}/bicyle`} className='bicyle verticalNav__nav-link'><img src={Cycle} alt="Bicyle logo" /></Link>
          <Link to={`/${id}/${name}/dumbell`} className='dumbbell verticalNav__nav-link'><img src={Dumbbell} alt="Dumbbell logo" /></Link>
        </div>
        <p className='verticalNav__copyrights'>Copyrights, SportSee 2022</p>
      </div>
    );
  };
  return null;
};

VerticalNav.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default VerticalNav;