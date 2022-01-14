import './KeyDataContainer.scss';
import PropTypes from 'prop-types';

/**
 * Return react component KeyDataContainer that show keydata depending on the received data 
 * @param { number } data
 * @param { string } icon
 * @param { string } name
 * @param { string } unit
 * @param { string } iconName
 * @returns { JSX.Element } 
 */
const KeyDataContainer = ({data, icon, name, unit, iconName}) => (
      <div className='keyData'>
        <div className={`keyData__icon ${iconName}`} >
          <img className='keyData__icon__img' src={icon} alt="keyData__icon" />
        </div>
        <div className='keyData__counter'>
          <div className='keyData__counter--number'>{data}{unit}</div>
          <p className='keyData__counter--text'>{name}</p>
        </div>
      </div>
      
    );

KeyDataContainer.propTypes = {
  data: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default KeyDataContainer;






