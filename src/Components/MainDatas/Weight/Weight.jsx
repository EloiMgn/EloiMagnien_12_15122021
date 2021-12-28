// import PureComponent from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import './Weight.scss';

const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="poid">{`${payload[0].value}kg`}</p>
        <p className="calories">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};


const Weight = (props) => {

  const data = props.userActivity;

  return(
    <div className='weightChart'>
      <h3 className='weightChart__title'>Activité quotidienne</h3>
      <BarChart
          width={835}
          height={320}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
        <Label value="Pages of my website" />
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="day" stroke="#9B9EAC" />
        <YAxis dataKey="kilogram" yAxisId="right" orientation="right" stroke="#9B9EAC" type="roboto" />
        <YAxis stroke="#FBFBFB"/>
        <Tooltip content={<CustomTooltip />}/>
        <Legend iconType='circle' align='right' verticalAlign='top' iconSize={8} type="roboto" height={30}/>
        <Bar className="bar" dataKey="kilogram" radius={[3, 3, 0, 0]} fill="#282D30" barSize={7} name='Poids (kg)'/>
        <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} name='Calories brûlées (Kcal)' barSize={7} maxBarSize={100}/>
      </BarChart>
    </div>
    
  );
};

export default Weight;






