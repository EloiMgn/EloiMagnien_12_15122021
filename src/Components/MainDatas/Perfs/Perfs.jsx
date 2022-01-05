import './Perfs.scss';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import {capitalizeFirstLetter} from '../../../utils/utils';

const Perfs = ({userPerfs}) => {
const newPerfs =[];
  const PerfsKindsChanger = () => {
    if(userPerfs){
      userPerfs.data.forEach(element => {
        newPerfs.push({value: element.value, kind: capitalizeFirstLetter(userPerfs.kind[element.kind])});
      });
    }
  };

  PerfsKindsChanger();

  return (
    <div className='performances'>
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart fill="#FFFFFF" width={258} height={263} cx="50%" cy="50%" outerRadius="80%" data={newPerfs}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer> 
    </div>
  );
   };
export default Perfs;