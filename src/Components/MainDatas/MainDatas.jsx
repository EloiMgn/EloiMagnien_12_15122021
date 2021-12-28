import './MainDatas.scss';
import Weight from './Weight/Weight';
import Objectives from './Objectives/Objectives';
import Radar from './Radar/Radar';
import KPI from './KPI/KPI';


const MainDatas = ({userActivity, userSessions}) => (
    <div className='mainDatas'>
      <Weight userActivity={userActivity} />
      <div className='mainDatas__secundaryCharts'>
      <Objectives userSessions={userSessions}/>
        <Radar />
        <KPI />
      </div>
    </div>
  );

export default MainDatas;