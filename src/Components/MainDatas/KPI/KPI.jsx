import './KPI.scss';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

/**
 * Return react component KPI radialChart
 * @param {Number} userScore Score of the user objective
 * @returns {HTMLElement}
 */
const KPI = ({userScore}) => {

  const data = [
    {
      uv: 1,
      fill: '#FFFFFF',
    },
    {
      uv: 1,
      fill: '#FFFFFF',
    },
    {
      uv: 1,
      fill: '#FFFFFF',
    },
    {
      uv: 1,
      fill: '#FFFFFF',
    },
    {
      uv: userScore,
      fill: '#FF0000',
    },
    
  ];

  
  return (
    <div className='KPI'>
      <div className='KPI__title'>
        <h3 className='KPI__title-text'>Score</h3>
      </div>
        <ResponsiveContainer width='100%' height='100%'>
          <RadialBarChart startAngle={90} endAngle={460} cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar
              // background={false}
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


    export default KPI;