import PropTypes from 'prop-types';
import './MainDatas.scss';
import Weight from './Weight/Weight';
import Objectives from './Objectives/Objectives';
import Perfs from './Perfs/Perfs';
import KPI from './KPI/KPI';

/**
 * Return react component MainDatas 
 * @param { object } userActivity
 * @param { object } userSessions
 * @param { object } userPerfs
 * @param { number } userScore
 * @returns { JSX.Element } 
 */
const MainDatas = ({userActivity, userSessions, userPerfs, userScore}) => (
    <div className='mainDatas'>
      <Weight userActivity={userActivity} />
      <div className='mainDatas__secundaryCharts'>
        <Objectives userSessions={userSessions} />
        <Perfs userPerfs={userPerfs} />
        <KPI userScore={userScore}/>
      </div>
    </div>
  );

  MainDatas.propTypes = {
    userActivity: PropTypes.oneOfType([PropTypes.object]).isRequired,
    userSessions: PropTypes.oneOfType([PropTypes.object]).isRequired,
    userPerfs: PropTypes.oneOfType([PropTypes.object]).isRequired,
    userScore: PropTypes.number.isRequired,
  };

export default MainDatas;
