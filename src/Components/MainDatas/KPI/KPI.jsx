import './KPI.scss';
import { PieChart, Pie,  Cell } from 'recharts';
import { useState, useEffect } from 'react';

const data = [
  { name: 'Group A', value: 0 },
  { name: 'Group B', value: 0 },
];
const COLORS = ['#FF0000', '#000000'];


const KPI = (userScore) => {
  const [score, setScore] = useState('');

  const modifyScore = () =>{
    setScore(userScore.userScore);
    data[0].value = score;
    data[1].value = 1-score;
  };
  useEffect(() => {
    modifyScore();
    // console.log(data);
  }, [userScore]);

  return (
        <div className='KPI'>
        <PieChart width={258} height={263} >
          <Pie
            data={data}
            cx={150}
            cy={100}
            startAngle={90}
            endAngle={450}
            innerRadius={70}
            outerRadius={80}
            fill="#FF0000"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
      );
}; 

export default KPI;