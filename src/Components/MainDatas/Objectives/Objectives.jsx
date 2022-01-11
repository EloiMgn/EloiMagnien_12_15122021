import './Objectives.scss';
import PropTypes from 'prop-types';
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

CustomTooltip.propTypes = {
  payload: PropTypes.oneOfType([PropTypes.object]).isRequired,
  active: PropTypes.bool.isRequired,
};

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


/**
 * Return react component Objective lineChart based on the user's weekly sessions
 * @param {Object} userSessions 
 * @returns {HTMLElement}
 */
const Objectives = ({userSessions}) => {
  const sessions = [];

  /**
   * Function that change day index to the first letter of the corresponding day
   */
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

Objectives.propTypes = {
  userSessions: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Objectives;





