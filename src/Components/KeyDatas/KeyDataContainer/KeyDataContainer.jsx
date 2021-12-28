import './KeyDataContainer.scss';


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

export default KeyDataContainer;






