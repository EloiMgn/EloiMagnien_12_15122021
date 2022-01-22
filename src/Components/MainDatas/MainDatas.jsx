import PropTypes from 'prop-types';
import './MainDatas.scss';
// import Loading from '../../Pages/Loading/Loading';
import Weight from './Weight/Weight';
import Objectives from './Objectives/Objectives';
import Perfs from './Perfs/Perfs';
import KPI from './KPI/KPI';

/**
* Return react component MainDatas
* @param { string } userId
* @returns { JSX.Element }
*/
const MainDatas = ({userId}) => {
  if(userId) {
    return (
      <div className='mainDatas'>
        <Weight id={userId} />
        <div className='mainDatas__secundaryCharts'>
          <Objectives id={userId} />
          <Perfs id={userId} />
          <KPI id={userId} /> 
        </div>
      </div>
    );
  } return null;
};


MainDatas.propTypes = {
userId: PropTypes.string.isRequired,
};

export default MainDatas;