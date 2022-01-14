import './KeyDatas.scss';
import PropTypes from 'prop-types';
import KeyDataContainer from './KeyDataContainer/KeyDataContainer';
import Energy from '../../utils/Assets/energy.svg';
import Chicken from '../../utils/Assets/chicken.svg';
import Cheeseburger from '../../utils/Assets/cheeseburger.svg';
import Apple from '../../utils/Assets/apple.svg';

/**
 * Return react component KeyDatas 
 * @param { number } keyDataCalories
 * @param { number } keyDataProtein
 * @param { number } keyDataLipids
 * @param { number } keyDataCarbohydrates
 * @returns { JSX.Element } 
 */
const KeyDatas = ({keyDataCalories, keyDataProtein, keyDataLipids, keyDataCarbohydrates}) => (
    <div className='keyData__container'>
      <KeyDataContainer data={keyDataCalories} icon={Energy} name='Calories' unit='kCal' iconName='energy'/>
      <KeyDataContainer data={keyDataProtein} icon={Chicken} name='Protéines' unit='g' iconName='chicken'/>
      <KeyDataContainer data={keyDataCarbohydrates} icon={Apple} name='Glucides' unit='g' iconName='apple'/>
      <KeyDataContainer data={keyDataLipids} icon={Cheeseburger} name='Lipides' unit='g' iconName='cheeseburger'/>
    </div>
    
  );

  KeyDatas.propTypes = {
    keyDataCalories: PropTypes.number.isRequired,
    keyDataProtein: PropTypes.number.isRequired,
    keyDataLipids: PropTypes.number.isRequired,
    keyDataCarbohydrates: PropTypes.number.isRequired,
  };

export default KeyDatas;