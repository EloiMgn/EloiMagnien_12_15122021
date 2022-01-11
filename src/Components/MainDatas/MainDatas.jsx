import './MainDatas.scss';
import Weight from './Weight/Weight';
import Objectives from './Objectives/Objectives';
import Perfs from './Perfs/Perfs';
import KPI from './KPI/KPI';

/**
 * Return react component MainDatas 
 * @param { * } userActivity
 * @param { object } userSessions
 * @param { object } userPerfs
 * @param { number } userScore
 * @returns {Function} 
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

export default MainDatas;
