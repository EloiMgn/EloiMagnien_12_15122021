import './Objectives.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Objectives = ({userSessions}) => (
<div className='objectives'>
        <LineChart
          width={258}
          height={263}
          data={userSessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis dataKey="day" stroke='#FFFFFF'/>

          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"  />
        </LineChart>
    </div>
  );

export default Objectives;





