import './KeyDatas.scss';
import PropTypes from 'prop-types';
import  useFetch  from '../../utils/utils';
import KeyDataContainer from './KeyDataContainer/KeyDataContainer';
import Energy from '../../utils/Assets/energy.svg';
import Chicken from '../../utils/Assets/chicken.svg';
import Cheeseburger from '../../utils/Assets/cheeseburger.svg';
import Apple from '../../utils/Assets/apple.svg';

/**
 * Return react component KeyDatas 
 * @param { string } userId
 * @returns { JSX.Element } 
 */
const KeyDatas = ({userId}) => {
  const { data } = useFetch(`/user/${userId}`);
  if(data) {
    return(
      <div className='keyData__container'>
        <KeyDataContainer data={data.data.keyData.calorieCount} icon={Energy} name='Calories' unit='kCal' iconName='energy'/> 
        <KeyDataContainer data={data.data.keyData.proteinCount} icon={Chicken} name='Protéines' unit='g' iconName='chicken'/>
        <KeyDataContainer data={data.data.keyData.carbohydrateCount} icon={Apple} name='Glucides' unit='g' iconName='apple'/>
        <KeyDataContainer data={data.data.keyData.lipidCount} icon={Cheeseburger} name='Lipides' unit='g' iconName='cheeseburger'/>
      </div>
      
      );
    } 
    return null;
};

  KeyDatas.propTypes = {
    userId: PropTypes.string.isRequired,
  };

export default KeyDatas;