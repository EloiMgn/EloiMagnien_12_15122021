import './Objectives.scss';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

// const CustomizedDot = (props) => {
//   const { cx, cy} = props;

//   return (
//     <svg x={cx - 10} y={cy - 10} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path fillRule="evenodd" clipRule="evenodd" d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z" fill="white"/>
//     <path d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z" stroke="white" strokeOpacity="0.198345" strokeWidth="5"/>
//     </svg>
//   );
// };


const weekDays = [
  {
    id: 1,
    longname: 'Lundi',
    short: 'L'
  },
  {
    id: 2,
    longname: 'Mardi',
    short: 'M'
  },
  {
    id: 3,
    longname: 'Mercredi',
    short: 'M'
  },
  {
    id: 4,
    longname: 'Jeudi',
    short: 'J'
  },
  {
    id: 5,
    longname: 'Vendredi',
    short: 'V'
  },
  {
    id: 6,
    longname: 'Samedi',
    short: 'S'
  },
  {
    id: 7,
    longname: 'Dimanche',
    short: 'D'
  }
];



const Objectives = ({userSessions}) => {
  const sessions = [];

  const sessionsDayChanger = () => {
    if(userSessions){
      userSessions.forEach(element => {
        for (let i = 0; i < weekDays.length; i++) {
          if(weekDays[i].id === element.day) {
            sessions.push({day: weekDays[i].short, sessionLength: element.sessionLength});
          }
        }
      });
    }
  };

  sessionsDayChanger();


  return (
  <div className='objectives'>
    <div className='objectives__title'>
      <h3 className='objectives__title-text'>Durée moyenne des sessions</h3>
    </div>
          <LineChart
            width={258}
            height={263}
            data={sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >

            <XAxis dataKey="day" stroke='#FFFFFF'  tickLine={false} axisLine={false}/>
            <Tooltip content={<CustomTooltip />}/>
            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"  dot={false}/>
          </LineChart>
      </div>
  );
};

export default Objectives;





