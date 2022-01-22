import './Perfs.scss';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import  useFetch  from '../../../utils/utils';


const titles= [  
  {
  eng: 'cardio',
  fr: 'cardio'
  },
  {
  eng: 'energy',
  fr: 'énergie'
  },
  {
  eng: 'intensity',
  fr: 'intensité'
  },
  {
  eng: 'speed',
  fr: 'vitesse'
  },
  {
  eng: 'strenght',
  fr: 'force'
  },
  {
  eng: 'endurance',
  fr: 'endurance'
  },
];






/**
 * Return react component RadarChart based on user's performances
 * @param { object } userPerfs 
 * @returns { JSX.Element } 
 */
const Perfs = ({id}) => {
const { data } = useFetch(`/user/${id}/performance`);

const newPerfs =[];
/**
 * this function change the kind number of the received object to 
 * a kind name 
 * @return { void }
 */
const PerfsKindsChanger = () => {
    if(data.data){
      data.data.data.forEach(element => {
        for (let i = 0; i < titles.length; i++) {
          if(data.data.kind[element.kind] === titles[i].eng) {
            newPerfs.push({value: element.value, kind: titles[i].fr});
          }
        }
      });
    }
  };
  
  PerfsKindsChanger();

  return (
    <div className='performances secundaryCharts'>
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart fill="#FFFFFF" width={258} height={263} cx="50%" cy="50%" outerRadius="50%" data={newPerfs}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

Perfs.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Perfs;