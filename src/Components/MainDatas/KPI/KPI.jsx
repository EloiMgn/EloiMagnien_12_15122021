import './KPI.scss';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import  useFetch  from '../../../utils/utils';

/**
 * Return react component KPI radialChart depending on the user's score
 * @param { Number } userScore Score of the user objective
 * @returns { JSX.Element }
 */
const KPI = ({id}) => {
  const { data } = useFetch(`/user/${id}`);

  if(data){
    const chartData = [
      {
        uv: 1,
        fill: '#fafafa',
      },
      {
        uv: 0,
        fill: '#FFFFFF',
      },
      {
        uv: 0,
        fill: '#FFFFFF',
      },
      {
        uv: 0,
        fill: '#FFFFFF',
      },
      {
        uv: data.data.score,
        fill: '#FF0000',
      },
      
    ];
  
    
    return (
      <div className='KPI secundaryCharts'>
        <div className='KPI__title'>
          <h3 className='KPI__title-text'>Score</h3>
        </div>
          <ResponsiveContainer width='100%' height='100%'>
            <RadialBarChart startAngle={90} endAngle={460} cx="50%" cy="63%" innerRadius="40%" outerRadius="80%" barSize={10} data={chartData}>
              <RadialBar
                clockWise
                dataKey="uv"
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className='KPI__description'>
            <h2 className='KPI__description__percent'>{data.data.score*100}%</h2>
            <h3 className='KPI__description__text'>de votre objectif</h3>
          </div>
      </div>
    );
  } return null;
  };

  

KPI.propTypes = {
  id: PropTypes.string.isRequired,
};

export default KPI;