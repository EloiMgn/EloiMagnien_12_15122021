import PureComponent from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import './Weight.scss';

const data = [
  {
    date: '1',
    uv: 356,
    pv: 68,
    amt: 2400,
  },
  {
    date: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: '8',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '9',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '10',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const CustomTooltip = function({ payload, active }) {
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

export default class Example extends PureComponent {

  render() {
    return (
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />}/>
          <Legend iconType='circle' align='right' verticalAlign='top' iconSize={8}/>
          <Bar className="bar" dataKey="pv" radius={[3, 3, 0, 0]} fill="#282D30" barSize={7} name='Poids (kg)'/>
          <Bar dataKey="uv" fill="#E60000" radius={[3, 3, 0, 0]} name='Calories brûlées (Kcal)' barSize={7} />
        </BarChart>
    );
  }
}
