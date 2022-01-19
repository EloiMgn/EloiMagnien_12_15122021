import './KPI.scss';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

/**
 * Return react component KPI radialChart depending on the user's score
 * @param { Number } userScore Score of the user objective
 * @returns { JSX.Element }
 */
const KPI = ({userScore}) => {

  const data = [
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
      uv: userScore,
      fill: '#FF0000',
    },
    
  ];

  
  return (
    <div className='KPI secundaryCharts'>
      <div className='KPI__title'>
        <h3 className='KPI__title-text'>Score</h3>
      </div>
        <ResponsiveContainer width='100%' height='100%'>
          <RadialBarChart startAngle={90} endAngle={460} cx="50%" cy="63%" innerRadius="40%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar
              clockWise
              dataKey="uv"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className='KPI__description'>
          <h2 className='KPI__description__percent'>{userScore*100}%</h2>
          <h3 className='KPI__description__text'>de votre objectif</h3>
        </div>
    </div>
  );
};

KPI.propTypes = {
  userScore: PropTypes.number.isRequired,
};

export default KPI;