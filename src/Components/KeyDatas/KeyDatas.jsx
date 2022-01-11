import './KeyDatas.scss';
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
 * @returns { HTMLElement } 
 */
const KeyDatas = ({keyDataCalories, keyDataProtein, keyDataLipids, keyDataCarbohydrates}) => (
    <div className='keyData__container'>
      <KeyDataContainer data={keyDataCalories} icon={Energy} name='Calories' unit='kCal' iconName='energy'/>
      <KeyDataContainer data={keyDataProtein} icon={Chicken} name='Protéines' unit='g' iconName='chicken'/>
      <KeyDataContainer data={keyDataCarbohydrates} icon={Apple} name='Glucides' unit='g' iconName='apple'/>
      <KeyDataContainer data={keyDataLipids} icon={Cheeseburger} name='Lipides' unit='g' iconName='cheeseburger'/>
    </div>
    
  );

export default KeyDatas;